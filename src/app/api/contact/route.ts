import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";
import { isRateLimited } from "@/lib/rateLimit";
import { profile } from "@/data/profile";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input." }, { status: 400 });
  }
  if (parsed.data.company) {
    // Honeypot tripped: pretend success, do nothing.
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  if (!resend) {
    // No RESEND_API_KEY set: log and return ok so the form still works in development.
    console.log("Contact form submission (no RESEND_API_KEY set):", { name, email, message });
    return NextResponse.json({ ok: true });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // TODO: replace with your verified sending domain
      to: profile.email,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `${message}\n\nFrom: ${name} (${email})`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not send message. Please try again." }, { status: 500 });
  }
}