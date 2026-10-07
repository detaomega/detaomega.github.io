import type { Metadata } from "next";
import { pages, profile, type PageName } from "@/content/profile";
import type { PostSummary } from "@/content/journal";

export const socialImage = {
  url: "/social-preview.png",
  width: 1200,
  height: 630,
  alt: "Ping-Yu Yang — engineering, research, and notes along the way",
};

export function pageMetadata(name: PageName): Metadata {
  const page = pages[name];
  return {
    title: page.title.en,
    description: page.description.en,
    openGraph: {
      title: page.title.en,
      description: page.description.en,
      url: profile.siteUrl + page.href,
      type: "website",
      locale: "en_US",
      siteName: profile.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title.en,
      description: page.description.en,
      images: [socialImage.url],
    },
    alternates: {
      canonical: page.href,
      types: { "application/rss+xml": "/feed.xml" },
    },
  };
}

export function postMetadata(post: PostSummary): Metadata {
  const url = `/blog/${post.slug}/`;
  return {
    title: `${post.title} · ${profile.name}`,
    description: post.description,
    authors: [{ name: profile.name, url: profile.siteUrl + "/about/" }],
    alternates: {
      canonical: url,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: profile.name,
      locale: post.language === "en" ? "en_US" : "zh_TW",
      publishedTime: `${post.date}T00:00:00+08:00`,
      modifiedTime: `${post.updated ?? post.date}T00:00:00+08:00`,
      authors: [profile.siteUrl + "/about/"],
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [socialImage.url],
    },
  };
}
