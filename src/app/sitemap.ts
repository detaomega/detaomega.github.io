import type { MetadataRoute } from "next";
import { navigation, profile } from "@/content/profile";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((page) => ({ url: profile.siteUrl + page.href })),
    ...getPublishedPosts().map((post) => ({
      url: `${profile.siteUrl}/blog/${post.slug}/`,
      lastModified: post.updated ?? post.date,
    })),
  ];
}
