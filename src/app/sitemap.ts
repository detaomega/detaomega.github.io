import type { MetadataRoute } from "next";
import { navigation, profile } from "@/content/profile";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((page) => ({ url: profile.siteUrl + page.href }));
}
