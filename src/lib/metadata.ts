import type { Metadata } from "next";
import { pages, profile, type PageName } from "@/content/profile";

export function pageMetadata(name: PageName): Metadata {
  const page = pages[name];
  return {
    title: page.title.en,
    description: page.description.en,
    alternates: { canonical: page.href },
    openGraph: {
      title: page.title.en,
      description: page.description.en,
      url: profile.siteUrl + page.href,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: page.title.en,
      description: page.description.en,
    },
  };
}
