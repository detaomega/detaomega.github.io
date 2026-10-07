import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { parse as parseYAML } from "yaml";
import MarkdownIt from "markdown-it";
import { categories, type PostSummary } from "@/content/journal";

export type PublishedPost = PostSummary & { html: string };
const directory = path.join(process.cwd(), "content/posts");
const markdown = new MarkdownIt({ html: false, typographer: true });

function requiredText(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim())
    throw new Error(`${file}: ${field} must be a nonempty string.`);
  return value.trim();
}

function dateText(value: unknown, field: string, file: string): string {
  const text =
    value instanceof Date
      ? value.toISOString().slice(0, 10)
      : requiredText(value, field, file);
  const parsed = new Date(text);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(text) ||
    !Number.isFinite(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== text
  ) {
    throw new Error(`${file}: ${field} must be a valid YYYY-MM-DD date.`);
  }
  return text;
}

export function getPublishedPosts(): PublishedPost[] {
  return readdirSync(directory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .flatMap((file) => {
      const source = readFileSync(path.join(directory, file), "utf8").replace(
        /\r\n/g,
        "\n",
      );
      const frontmatter = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(source);
      if (!frontmatter)
        throw new Error(`${file}: add YAML frontmatter between --- lines.`);
      const data = parseYAML(frontmatter[1]);
      if (!data || typeof data !== "object" || Array.isArray(data))
        throw new Error(`${file}: frontmatter must be an object.`);
      const content = source.slice(frontmatter[0].length);
      // Publishing is explicit: omitted draft fields and drafts stay out of the generated site.
      if (data.draft !== false) return [];
      const slug = file.slice(0, -3);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
        throw new Error(`${file}: use a lowercase, hyphen-separated filename.`);
      if (!Object.hasOwn(categories, data.category))
        throw new Error(
          `${file}: category must be technology, research, or travel.`,
        );
      if (data.language !== "en" && data.language !== "zh-Hant")
        throw new Error(`${file}: language must be en or zh-Hant.`);
      if (
        data.tags !== undefined &&
        (!Array.isArray(data.tags) ||
          data.tags.some((tag: unknown) => typeof tag !== "string"))
      )
        throw new Error(`${file}: tags must be a list of strings.`);
      const date = dateText(data.date, "date", file);
      const updated =
        data.updated === undefined
          ? undefined
          : dateText(data.updated, "updated", file);
      if (updated && updated < date)
        throw new Error(`${file}: updated cannot be earlier than date.`);
      const cjkCharacters = content.match(/[\u3400-\u9fff]/g)?.length ?? 0;
      const words = content
        .replace(/[\u3400-\u9fff]/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;
      return [
        {
          slug,
          title: requiredText(data.title, "title", file),
          description: requiredText(data.description, "description", file),
          date,
          ...(updated ? { updated } : {}),
          category: data.category as PostSummary["category"],
          language: data.language as PostSummary["language"],
          tags: data.tags ?? [],
          readingMinutes: Math.max(
            1,
            Math.ceil(cjkCharacters / 400 + words / 220),
          ),
          html: markdown.render(content),
        },
      ];
    })
    .sort(
      (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
    );
}

export function getPostSummaries(): PostSummary[] {
  return getPublishedPosts().map(({ html: _html, ...post }) => post);
}
