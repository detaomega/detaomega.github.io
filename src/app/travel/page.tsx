import { PageIntro } from "@/components/page-intro";
import { TravelMap } from "@/components/travel-map";
import { visitedCountries } from "@/content/travel";
import { getPublishedPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/metadata";
import world from "@/content/world-map.json";

export const metadata = pageMetadata("travel");

export default function TravelPage() {
  const codes = new Set(
    [...world.countries, ...world.smallCountries].map(
      (country) => country.code,
    ),
  );
  const seen = new Set<string>();
  const posts = new Set(getPublishedPosts().map((post) => post.slug));
  for (const country of visitedCountries) {
    if (!codes.has(country.code) || seen.has(country.code))
      throw new Error(
        `Invalid or duplicate travel country code: ${country.code}`,
      );
    seen.add(country.code);
    for (const visit of country.visits) {
      if (visit.articleSlug && !posts.has(visit.articleSlug))
        throw new Error(
          `Travel article is not published: ${visit.articleSlug}`,
        );
    }
  }
  return (
    <>
      <PageIntro page="travel" />
      <TravelMap countries={visitedCountries} />
    </>
  );
}
