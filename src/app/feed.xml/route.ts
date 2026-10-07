import { profile } from "@/content/profile";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-static";
function escapeXML(value: string) {
  return value.replace(
    /[<>&"']/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[character]!,
  );
}

export function GET() {
  const items = getPublishedPosts()
    .map((post) => {
      const url = `${profile.siteUrl}/blog/${post.slug}/`;
      return `<item><title>${escapeXML(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escapeXML(post.description)}</description><pubDate>${new Date(`${post.date}T00:00:00+08:00`).toUTCString()}</pubDate><category>${post.category}</category></item>`;
    })
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${escapeXML(profile.name)} · Blog</title><link>${profile.siteUrl}/blog/</link><description>Technical notes, research ideas, and travel stories by ${escapeXML(profile.name)}.</description><atom:link href="${profile.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
}
