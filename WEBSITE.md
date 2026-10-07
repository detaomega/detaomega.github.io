# 網站維護說明

網站：<https://detaomega.github.io/>。原始碼與部署 workflow 都放在 `detaomega/detaomega.github.io`，不用另外建立前端 repo。

## 修改內容

主要編輯 `src/content/profile.ts`：

- `profile`：姓名、電子郵件、GitHub、LinkedIn、照片與 CV 路徑。
- `pages`：六個頁面的標題、簡介、SEO 描述和導覽文字。
- `research`、`aboutSections`：研究領域與自我介紹。
- `education`：學歷、日期、GPA。臺大畢業日期依本人更新為「預計 2026 年 12 月底」。
- `experiences`：工作經歷與成果，首頁摘要和完整經歷頁共用。NVIDIA 的 GPU System Engineer（RDSS Intern）目前標示為即將到職；開始工作後可更新 `dates`，並移除 `upcoming: true`。
- `projects`：專案、技術列表與 GitHub 連結，首頁與專案頁共用。
- `awards`、`skills`：獎項與技術能力。
- `labels`：按鈕與其他共用介面文字。

文案使用 `{ en: "English", zh: "繁體中文" }`。修改內容後不需手動產生 HTML，開發時畫面會即時更新，正式版交給 `npm run build` 建置。

## 修改版面

- `src/app/page.tsx`：首頁。
- `src/app/about/page.tsx`、`projects/page.tsx`、`experience/page.tsx`：其餘頁面。
- `src/components/site-shell.tsx`：導覽、頁尾與頁面結構。
- `src/components/table-of-contents.tsx`：首頁的水平章節導覽與目前閱讀位置。
- `src/components/resume-timeline.tsx`：學歷卡片與工作經歷折疊清單；點擊一筆資料即可展開。完整經歷頁預設展開。
- `src/components/organization-logo.tsx`：學校與公司的 logo。圖片路徑集中在 `profile.ts` 的 `organizations`。
- `src/components/language-provider.tsx`：React 語言狀態、文案元件、偏好記憶與跨頁語言保留。
- `src/components/project-card.tsx`：共用專案項目。
- `src/app/globals.css`：版面、字型、配色及手機版。
- 字級使用 `rem`，目前內文基準為 17px，首頁介紹為 16px，並配合瀏覽器字體偏好調整。
- `src/lib/metadata.ts`、`src/app/robots.ts`、`sitemap.ts`：SEO 與搜尋引擎設定。

圖片與 CV 放在 `public/assets/`。替換 `profile.jpg` 或 `Ping-Yu-Yang-CV.pdf` 即可更新照片或履歷，也可在 `profile` 修改檔名。個人照片取自 <https://github.com/detaomega>。圖示與地圖來源見 [docs/design-assets.md](docs/design-assets.md)。

目前版面採用大地色配色（奶油白、砂岩米色、橄欖綠、陶土色）、無襯線字體、水平章節導覽、矩形照片、並排學歷卡片與工作經歷折疊清單。頁尾不再顯示設計參考署名。

校徽與公司圖示存放於 `public/assets/logos/`，以原始比例顯示，不依賴外部圖片網址。圖示來源記錄於 [docs/design-assets.md](docs/design-assets.md)。學歷的 `degreeTitle`、`field`、`institution` 和工作經歷的 `role`、`organization`、`dates` 組成時間軸摘要，研究說明、GPA、工作成果與技術列表則顯示在展開內容。

## 建置與部署

```bash
npm ci
npm run dev
```

```bash
npm run typecheck
npm run build
npm run preview
```

第一次將 GitHub **Settings → Pages → Source** 設為 **GitHub Actions**。之後推送 `main` 便會部署，輸出放在 `out/`，不需提交生成的 HTML。部署 workflow 上傳完整的 `out/`，包含 `_next/`、圖片、PDF 與既有競賽檔案。

在型別檢查或建置失敗時，Actions 不會部署該次版本。部署問題可從 Actions 的 `Build and deploy Next.js` 查看。

Pages 尚使用 `main` 根目錄部署時，既有靜態 HTML 也已移除公開參考連結並套用大地色；這些檔案暫時保留作為切換到 Actions 前的網站版本。新 Blog、旅行頁與完整 SEO 功能由 Next.js 建置，必須切換到 Actions 才會上線。日常內容維護以 `src/` 的 Next.js 原始碼為主。

Next.js 採用 `output: "export"`、`trailingSlash: true` 和 `images.unoptimized: true`，可以直接在 GitHub Pages 提供各頁面與本機圖片。若新增需要伺服器的功能，應重新選擇 hosting。

## 發布 Blog

1. 複製 `content/posts/_template.md`，用英文小寫與連字號命名，例如 `learning-nextjs.md`。
2. 更新 frontmatter，並撰寫實際文章內容。
3. 完成後將 `draft` 設為 `false`，建置確認後推送至 GitHub。

```yaml
---
title: "你的文章標題"
description: "介紹文章的核心問題與內容，供列表和搜尋結果使用。"
date: "2026-10-07"
updated: "2026-10-08" # 選填，實際更新時才填入
category: technology # technology、research、travel
language: zh-Hant # zh-Hant 或 en
tags: [Next.js, 筆記]
draft: false
---
```

日期採 `YYYY-MM-DD`；修改日期不能早於發布日期。未填 `draft: false` 或以 `_` 開頭的檔案不會產生公開頁面，也不會進入 RSS 與 sitemap。Markdown 支援標題、程式碼、清單、表格、連結及圖片；原始 HTML 會顯示為文字，避免文章內執行腳本。

文章網址為 `/blog/learning-nextjs/`。圖片放在 `public/assets/blog/`，在文章內用 `![具體圖片描述](/assets/blog/your-photo.jpg)` 插入。文章內容維持撰寫時的語言，網站導覽仍可切換中英文。

`src/lib/posts.ts` 處理文章讀取與草稿排除；`src/app/blog/[[...slug]]/page.tsx` 同時產生列表與獨立文章；`src/components/blog-list.tsx` 提供分類篩選。

## 新增旅行紀錄

編輯 `src/content/travel.ts` 的 `visitedCountries`。以下僅是資料格式示範，請填入自己實際去過的國家與年份：

```typescript
export const visitedCountries: VisitedCountry[] = [
  {
    code: "JP",
    name: { en: "Japan", zh: "日本" },
    visits: [
      {
        year: 2025,
        places: { en: "Tokyo & Kyoto", zh: "東京與京都" },
        note: {
          en: "Your own memory of this trip.",
          zh: "寫下自己的旅行心得。",
        },
        // articleSlug: "japan-travel-note", // 選填，對應已發布文章檔名
      },
    ],
  },
];
```

`code` 使用兩碼 ISO 國家代碼，例如日本 `JP`、韓國 `KR`、新加坡 `SG`。同一個國家填一筆，多次旅行放在 `visits`。點擊國家卡片標題會在地圖強調該國；小型國家用定位點顯示。若文章連結不存在或未發布，建置會提示修正，避免產生壞連結。

## 搜尋與曝光

技術設定已包括：

- 每頁的 title、description、canonical；文章使用自身標題與摘要。
- `/social-preview.png`：1200 × 630 的大地色分享圖，在建置時產生。
- `/sitemap.xml` 與 `/robots.txt`：包含全部六頁及已發布文章。文章修改日期來自實際內容日期。
- `/feed.xml`：已發布文章的 RSS，頁首提供自動探索連結，Blog 和頁尾可訂閱。
- `Person`、`WebSite` 與文章 `BlogPosting` 結構化資料。
- 靜態 HTML：搜尋引擎不需執行 JavaScript 即可讀取文章與個人內容。

部署完成後，請使用自己的 Google 帳號到 [Search Console](https://search.google.com/search-console/) 新增 **URL prefix** 資源 `https://detaomega.github.io/`，選擇 HTML tag 驗證。將驗證碼 `content="..."` 中的值填入 GitHub **Settings → Secrets and variables → Actions → Variables** 的 `GOOGLE_SITE_VERIFICATION`，重新執行部署後按驗證。開發時可複製 `.env.example` 為 `.env.local` 填入同一值。

驗證後提交 `https://detaomega.github.io/sitemap.xml`，用 URL Inspection 檢查首頁與第一篇文章，追蹤點擊、曝光及索引狀態。網站需要先能公開開啟；Search Console 驗證必須由帳號擁有者操作。

想持續增加曝光，可把網站放在 GitHub 個人檔案的 Website 欄位及履歷上，並持續發布具體的技術解題、研究整理或旅行心得，從相關社群分享文章連結。SEO 設定協助搜尋引擎理解內容，並不保證收錄、排名或流量。參考 [Google SEO 入門指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)、[sitemap 提交方式](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) 與 [Article 結構化資料](https://developers.google.com/search/docs/appearance/structured-data/article)。
