import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language-provider";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.name,
  icons: { icon: "/assets/favicon.svg" },
  authors: [{ name: profile.name, url: profile.siteUrl + "/about/" }],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};
export const viewport: Viewport = { themeColor: "#faf7f1" };

export default function RootLayout({ children }: { children: ReactNode }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl + "/",
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Semantic Communication",
      "Deep Learning",
      "Wireless Communication",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Yang Ming Chiao Tung University",
    },
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              person,
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: profile.name,
                url: profile.siteUrl + "/",
                inLanguage: ["en", "zh-Hant"],
              },
            ]).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
