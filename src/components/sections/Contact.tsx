"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, Phone } from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { profile } from "@/data/profile";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { Reveal } from "@/components/ui/Reveal";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: FaLinkedin, label: "LinkedIn", value: "v-varatha-mani", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "varathamani06", href: profile.github },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0e1c] pb-0 pt-24 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_0%,rgb(var(--accent)/0.32),transparent_70%),radial-gradient(520px_380px_at_0%_100%,rgb(var(--accent-2)/0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1160px] px-6">
        <div className="grid gap-11 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent2">Contact</span>
            <h2 className="mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.1]">Let&apos;s Build Something</h2>
            <p className="mt-3 max-w-[56ch] text-white/70">
              Interested in working together or discussing a project? Feel free to reach out.
            </p>

            <div className="mt-7 grid gap-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                
                 <a key={label}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-[60px] items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 px-4.5 py-3.5 backdrop-blur transition hover:translate-x-1 hover:border-accent2/60"
                >
                  <Icon size={19} className="text-accent2" aria-hidden />
                  <div>
                    <b className="block text-sm">{label}</b>
                    <span className="break-words text-[0.86rem] text-white/60">{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="grid gap-4.5 rounded-[22px] border border-white/15 bg-white/[0.06] p-7 backdrop-blur-xl"
            >
              <label className="grid gap-1.5 text-sm font-medium">
                Name
                <input {...register("name")} autoComplete="name" className="min-h-12 rounded-xl border border-white/20 bg-[#05081280] px-3.5 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-accent2" />
                <span className="min-h-[1.1em] text-[0.82rem] text-rose-300">{errors.name?.message}</span>
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Email
                <input {...register("email")} type="email" autoComplete="email" className="min-h-12 rounded-xl border border-white/20 bg-[#05081280] px-3.5 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-accent2" />
                <span className="min-h-[1.1em] text-[0.82rem] text-rose-300">{errors.email?.message}</span>
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Message
                <textarea {...register("message")} rows={5} className="min-h-[140px] resize-y rounded-xl border border-white/20 bg-[#05081280] px-3.5 py-3 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-accent2" />
                <span className="min-h-[1.1em] text-[0.82rem] text-rose-300">{errors.message?.message}</span>
              </label>
              {/* honeypot */}
              <div className="absolute h-px w-px overflow-hidden opacity-0" aria-hidden>
                <label>Leave empty<input {...register("company")} tabIndex={-1} autoComplete="off" /></label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent2 px-5 font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : <>Send Message <ArrowRight size={16} aria-hidden /></>}
              </button>

              {status === "sent" && (
                <div role="status" className="rounded-xl border border-accent2/50 bg-accent2/15 px-4 py-3.5 text-sm">
                  Thanks — your message has been sent. I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div role="status" className="rounded-xl border border-rose-400/50 bg-rose-400/15 px-4 py-3.5 text-sm">
                  Something went wrong. Please try again, or email me directly at {profile.email}.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}