import type { LocalizedString } from "./profile";

export const categories = {
  technology: { en: "Technology", zh: "技術" },
  research: { en: "Research", zh: "研究" },
  travel: { en: "Travel", zh: "旅行" },
} satisfies Record<string, LocalizedString>;
export type PostCategory = keyof typeof categories;

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: PostCategory;
  language: "en" | "zh-Hant";
  tags: string[];
  readingMinutes: number;
};

export const journalLabels = {
  all: { en: "All notes", zh: "所有文章" },
  emptyTitle: {
    en: "The first page is still unwritten.",
    zh: "第一篇文章，正在醞釀。",
  },
  emptyDescription: {
    en: "Technical notes, research thoughts, and travel stories will find a home here. Come back for the first entry.",
    zh: "這裡將收藏技術筆記、研究想法和旅行故事。等第一篇寫好，再來一起閱讀。",
  },
  emptyCategory: {
    en: "No notes in this category yet.",
    zh: "這個分類的文章準備中。",
  },
  subscribe: { en: "Follow via RSS", zh: "透過 RSS 訂閱" },
  back: { en: "All articles", zh: "所有文章" },
  copy: { en: "Copy article link", zh: "複製文章連結" },
  copied: { en: "Link copied", zh: "已複製連結" },
  copyFailed: { en: "Copy this address to share", zh: "複製這個網址即可分享" },
  minutes: { en: "min read", zh: "分鐘閱讀" },
  updated: { en: "Updated", zh: "更新於" },
};
