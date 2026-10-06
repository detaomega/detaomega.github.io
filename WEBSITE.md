# Ping-Yu Yang 個人網站

網站網址：<https://detaomega.github.io/>

以 CV 為內容來源，採用深色與萊姆綠的響應式單頁設計。內容包含簡介、研究方向、實習經歷、精選專案、學歷、獎項、技術能力與聯絡方式，支援英文與繁體中文切換。

## 本機預覽

在專案目錄執行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

開啟 <http://localhost:8000>。網站由原生 HTML、CSS 與 JavaScript 組成，不需要 npm 或建置步驟；JavaScript 關閉時，英文內容及所有連結仍可使用。

## 更新內容

- `index.html`：網站內容。英文寫在元素中，繁體中文寫在同一元素的 `data-zh` 屬性。
- `assets/css/portfolio.css`：色彩、字型、排版及手機版。Google Fonts 無法載入時會使用系統字型。
- `assets/js/portfolio.js`：語言切換、手機導覽與目前章節標示。
- `assets/Ping-Yu-Yang-CV.pdf`：可下載的原始履歷；要更新履歷，替換同名 PDF。
- `assets/favicon.svg`：網站圖示。
- `robots.txt`、`sitemap.xml`：搜尋引擎設定。

臺大學歷的預計畢業日期忠實保留 CV 中的 2026 年 6 月；確認實際畢業狀態後，可在 `index.html` 同時更新英文與 `data-zh`。網站的聯絡區塊使用 CV 電子郵件，下載的 PDF 保留原始 CV 內容。

## GitHub Pages

Git 遠端網址為 `git@github.com:detaomega/detaomega.github.io.git`。

這個儲存庫原本已啟用 GitHub Pages；首頁改由根目錄 `index.html` 提供，既有年度競賽檔案與原始 `README.md` 保留。沿用從 `main` 分支根目錄發布的設定即可，無須加入自訂 Actions 工作流程。

如果需重新設定：到儲存庫 **Settings → Pages → Build and deployment**，選擇 **Deploy from a branch**，分支 `main`，資料夾 `/(root)`。

完成修改後：

```bash
git add index.html assets WEBSITE.md sitemap.xml robots.txt
git commit -m "Update personal website"
git push origin main
```

GitHub 會自動發布。可在儲存庫 Actions 中查看 `pages build and deployment` 的結果。

GitHub 官方說明：<https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>
