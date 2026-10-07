import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language-provider";
import { SiteShell } from "@/components/site-shell";
import { StructuredData } from "@/components/structured-data";
import { profile } from "@/content/profile";
import { personSchema, websiteSchema } from "@/lib/structured-data";
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
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [personSchema, websiteSchema],
          }}
        />
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
