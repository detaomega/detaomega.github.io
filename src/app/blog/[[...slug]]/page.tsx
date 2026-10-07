import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/article-header";
import { BlogList } from "@/components/blog-list";
import { PageIntro } from "@/components/page-intro";
import { profile } from "@/content/profile";
import { pageMetadata, postMetadata, socialImage } from "@/lib/metadata";
import { getPublishedPosts, getPostSummaries } from "@/lib/posts";

export const dynamicParams = false;
type Props = { params: Promise<{ slug?: string[] }> };

export function generateStaticParams() {
  return [
    { slug: [] },
    ...getPublishedPosts().map((post) => ({ slug: [post.slug] })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug?.length) return pageMetadata("blog");
  const post =
    slug.length === 1 &&
    getPublishedPosts().find((item) => item.slug === slug[0]);
  if (!post) notFound();
  return postMetadata(post);
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length)
    return (
      <>
        <PageIntro page="blog" />
        <BlogList posts={getPostSummaries()} />
      </>
    );
  const post =
    slug.length === 1 &&
    getPublishedPosts().find((item) => item.slug === slug[0]);
  if (!post) notFound();
  const url = `${profile.siteUrl}/blog/${post.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: post.language,
    author: {
      "@type": "Person",
      name: profile.name,
      url: profile.siteUrl + "/about/",
    },
    mainEntityOfPage: url,
    url,
    image: profile.siteUrl + socialImage.url,
    keywords: post.tags.join(", "),
  };
  const { html, ...summary } = post;
  return (
    <article className="blog-article" lang={post.language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <ArticleHeader key={post.slug} post={summary} />
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
