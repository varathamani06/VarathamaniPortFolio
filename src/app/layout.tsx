import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: "Varathamani V | Full-Stack Developer | AI Developer",
  description:
    "Varathamani V is a Full-Stack Developer and AI Developer building modern web applications and AI-powered systems.",
  openGraph: {
    title: "Varathamani V | Full-Stack Developer | AI Developer",
    description: "Building scalable web applications and AI-powered solutions.",
    url: profile.site,
    siteName: "Varathamani V",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Varathamani V", description: profile.tagline },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"  data-theme="light" className={`${space.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-bg text-fg antialiased">
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              email: profile.email,
              url: profile.site,
              sameAs: [profile.github, profile.linkedin],
            }),
          }}
        />
      </body>
    </html>
  );
}