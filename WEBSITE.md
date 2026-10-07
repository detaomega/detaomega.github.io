# 網站維護說明

網站：<https://detaomega.github.io/>。原始碼與部署 workflow 都放在 `detaomega/detaomega.github.io`，不用另外建立前端 repo。

## 修改內容

主要編輯 `src/content/profile.ts`：

- `profile`：姓名、電子郵件、GitHub、照片與 CV 路徑。
- `designReferences`：頁尾公開標示的設計參考姓名與原網站連結。
- `pages`：四個頁面的標題、簡介、SEO 描述和導覽文字。
- `research`、`aboutSections`：研究領域與自我介紹。
- `education`：學歷、日期、GPA。臺大畢業日期目前依 CV 保留「預計 2026 年 6 月」。
- `experiences`：工作經歷與成果，首頁摘要和完整經歷頁共用。
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
- `src/lib/metadata.ts`、`src/app/robots.ts`、`sitemap.ts`：SEO 與搜尋引擎設定。

圖片與 CV 放在 `public/assets/`。替換 `profile.jpg` 或 `Ping-Yu-Yang-CV.pdf` 即可更新照片或履歷，也可在 `profile` 修改檔名。個人照片取自 <https://github.com/detaomega>。設計參考來源公開列在每一頁的頁尾，可修改 `designReferences` 更新；參考範圍與圖示來源見 [docs/design-assets.md](docs/design-assets.md)。

目前版面採用藍灰配色、無襯線字體、水平章節導覽、矩形照片、並排學歷卡片與工作經歷折疊清單。

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

Pages 尚使用 `main` 根目錄部署時，既有靜態 HTML 也已加入相同的公開參考連結；這些檔案暫時保留作為切換到 Actions 前的網站版本。日常內容維護以 `src/` 的 Next.js 原始碼為主。

Next.js 採用 `output: "export"`、`trailingSlash: true` 和 `images.unoptimized: true`，可以直接在 GitHub Pages 提供各頁面與本機圖片。若新增需要伺服器的功能，應重新選擇 hosting。
