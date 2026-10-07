"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, journalLabels, type PostSummary } from "@/content/journal";
import { profile } from "@/content/profile";
import { useLanguage } from "./language-provider";

export function ArticleHeader({ post }: { post: PostSummary }) {
  const { language, translate } = useLanguage();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const url = `${profile.siteUrl}/blog/${post.slug}/`;
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }
  return (
    <header className="article-header" lang={language}>
      <Link className="section-link" href="/blog/">
        ← {translate(journalLabels.back)}
      </Link>
      <div className="post-meta">
        <span>{translate(categories[post.category])}</span>
        <time dateTime={post.date}>{post.date}</time>
        <span>
          {post.readingMinutes} {translate(journalLabels.minutes)}
        </span>
      </div>
      <h1 lang={post.language}>{post.title}</h1>
      <p className="article-description" lang={post.language}>
        {post.description}
      </p>
      <div className="article-byline">
        <span>{profile.name}</span>
        {post.updated && (
          <span>
            {translate(journalLabels.updated)}{" "}
            <time dateTime={post.updated}>{post.updated}</time>
          </span>
        )}
      </div>
      <button className="copy-link" type="button" onClick={copyLink}>
        {translate(
          copyState === "copied" ? journalLabels.copied : journalLabels.copy,
        )}
      </button>
      <span className="copy-feedback" role="status">
        {copyState === "failed" && (
          <>
            {translate(journalLabels.copyFailed)}: <a href={url}>{url}</a>
          </>
        )}
      </span>
    </header>
  );
}
