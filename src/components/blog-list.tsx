"use client";

import Link from "next/link";
import { useState } from "react";
import {
  categories,
  journalLabels,
  type PostCategory,
  type PostSummary,
} from "@/content/journal";
import { Icon } from "./icons";
import { useLanguage } from "./language-provider";

export function BlogList({ posts }: { posts: PostSummary[] }) {
  const { language, translate } = useLanguage();
  const [category, setCategory] = useState<PostCategory | "all">("all");
  const visible = posts.filter(
    (post) => category === "all" || post.category === category,
  );
  return (
    <section
      className="blog-content"
      aria-label={language === "en" ? "Articles" : "文章列表"}
    >
      <div className="journal-toolbar">
        <div
          className="category-filters"
          role="group"
          aria-label={language === "en" ? "Filter by topic" : "依主題篩選"}
        >
          {(
            ["all", ...Object.keys(categories)] as (PostCategory | "all")[]
          ).map((key) => (
            <button
              type="button"
              key={key}
              aria-pressed={category === key}
              onClick={() => setCategory(key)}
            >
              {translate(key === "all" ? journalLabels.all : categories[key])}
            </button>
          ))}
        </div>
        <a className="section-link" href="/feed.xml">
          {translate(journalLabels.subscribe)} <span aria-hidden="true">↗</span>
        </a>
      </div>
      {visible.length ? (
        <div className="post-list">
          {visible.map((post) => (
            <Link
              href={`/blog/${post.slug}/`}
              className="post-card"
              key={post.slug}
            >
              <div className="post-meta">
                <span>{translate(categories[post.category])}</span>
                <time dateTime={post.date}>{post.date}</time>
                <span>
                  {post.readingMinutes} {translate(journalLabels.minutes)}
                </span>
              </div>
              <h2 lang={post.language}>{post.title}</h2>
              <p lang={post.language}>{post.description}</p>
              <span className="post-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="journal-empty" role="status">
          <span className="empty-icon">
            <Icon name="book" />
          </span>
          <h2>
            {translate(
              posts.length
                ? journalLabels.emptyCategory
                : journalLabels.emptyTitle,
            )}
          </h2>
          {!posts.length && <p>{translate(journalLabels.emptyDescription)}</p>}
        </div>
      )}
    </section>
  );
}
