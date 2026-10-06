# Ping-Yu Yang 個人網站

網站網址：<https://detaomega.github.io/>

以 CV 為內容來源，依照使用者指定的 <https://stanleyshen2003.github.io/me/> 重新設計：白色背景、灰色文字、青綠色連結、置中膠囊導覽、個人照片、留白與簡潔專案列表。內容與程式碼為本網站製作；照片取自使用者的 GitHub 公開大頭照 <https://github.com/detaomega>。

## 頁面

- `/`：個人簡介、照片、專案預覽、學歷與工作摘要。
- `/about/`：研究方向、學歷、競賽獎項與技術能力。
- `/projects/`：AI 爵士鼓伴奏生成、員工餐點訂購平台。
- `/experience/`：TSMC、Microsoft、Logitech 的實習經歷。

所有頁面支援英文與繁體中文切換，語言偏好可跨頁保留。JavaScript 關閉時，英文內容、頁面導覽及 CV 下載仍可使用。

## 本機預覽

```bash
python3 scripts/build_site.py
python3 -m http.server 8000 --bind 127.0.0.1
```

開啟 <http://localhost:8000>。這是原生 HTML、CSS 與 JavaScript 網站，不需 npm。頁面生成器只使用 Python 標準函式庫；生成後的 HTML 已一起提交，GitHub Pages 不需額外建置步驟。

## 更新內容

- `content/home.html`、`content/about.html`、`content/projects.html`、`content/experience.html`：各頁主要內容。英文寫在元素中，繁體中文寫在同一元素的 `data-zh` 屬性。
- `templates/base.html`：共用導覽、頁尾與網頁標頭。
- `scripts/build_site.py`：頁面標題、導覽文字、路徑，以及靜態頁面生成流程。
- `assets/css/portfolio.css`：配色、字型、排版與手機版。Google Fonts 無法載入時使用系統字型。
- `assets/js/portfolio.js`：語言切換與偏好記憶。
- `assets/profile.jpg`：個人照片，可替換成自己的 JPG 照片。
- `assets/Ping-Yu-Yang-CV.pdf`：可下載的原始 CV，可替換同名 PDF。

修改內容或模板後，執行 `python3 scripts/build_site.py`，會產生 `index.html`、`about/index.html`、`projects/index.html`、`experience/index.html` 與 `sitemap.xml`。請避免直接修改生成的 HTML，否則下次生成時會被覆寫。

臺大學歷目前依 CV 保留「預計 2026 年 6 月畢業」；確認實際狀態後，在 `content/home.html` 與 `content/about.html` 同時更新英文及繁體中文，再重新生成頁面。

## GitHub Pages

Git 遠端網址：`git@github.com:detaomega/detaomega.github.io.git`。

沿用原本 GitHub Pages 設定，從 `main` 分支根目錄發布。年度競賽檔案與原始 `README.md` 不需調整。

```bash
python3 scripts/build_site.py
git add index.html about projects experience assets content templates scripts WEBSITE.md sitemap.xml
git commit -m "Update personal website"
git push origin main
```

可在儲存庫 Actions 查看 `pages build and deployment` 的結果。若重新設定，到 **Settings → Pages → Build and deployment** 選擇 **Deploy from a branch**、`main`、`/(root)`。

GitHub 官方說明：<https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>
