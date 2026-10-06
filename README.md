# Ping-Yu Yang · Personal Website

以 **Next.js App Router、React、TypeScript** 開發，靜態匯出後由 GitHub Actions 部署到 GitHub Pages。

網站：<https://detaomega.github.io/>。

## 開發

使用 Node.js 24（`.nvmrc`）。已安裝 nvm 的環境可先執行 `nvm use`。

```bash
npm ci
npm run dev
```

開啟 <http://localhost:3000>。修改元件、內容與樣式後，Next.js 會自動更新畫面。

## 專案結構

| 位置                           | 用途                                              |
| ------------------------------ | ------------------------------------------------- |
| `src/content/profile.ts`       | 個人資料、中英文文案、學歷、經歷、專案與獎項      |
| `src/app/`                     | Home、About、Projects、Experience 頁面與 metadata |
| `src/components/`              | 共用導覽、語言切換、學歷／經歷時間軸、專案與圖示  |
| `src/app/globals.css`          | 共用樣式與響應式版面                              |
| `public/assets/`               | 照片、原始 CV 與 favicon                          |
| `.github/workflows/deploy.yml` | 型別檢查、建置與 GitHub Pages 部署                |

內容集中於 `src/content/profile.ts`。例如更新實習經歷，只需修改 `experiences` 陣列，首頁時間軸與 Experience 頁面便會同步更新。`organizations` 管理學校與公司的 logo 路徑。新增專案時可複製 `projects` 的既有項目；每段文案的 `en`、`zh` 分別是英文與繁體中文。

## 驗證與正式版預覽

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` 產生 `out/`。`npm run preview` 使用 Python 3 開啟 <http://localhost:8000>，直接預覽靜態匯出結果。

`node_modules/`、`.next/` 與 `out/` 不提交到 Git；部署由 Actions 建置與上傳產物。

## 部署

第一次請到 [Settings → Pages](https://github.com/detaomega/detaomega.github.io/settings/pages)，將 **Build and deployment → Source** 設為 **GitHub Actions**。

之後推送到 `main` 就會自動執行型別檢查、靜態匯出與部署：

```bash
git add src public
git commit -m "Update portfolio"
git push origin main
```

如果修改了套件或設定，也要提交 `package.json`、`package-lock.json` 或對應設定檔。可在 [Actions](https://github.com/detaomega/detaomega.github.io/actions) 查看 `Build and deploy Next.js` 的結果；如果首次執行因 Source 設定未完成而失敗，改好設定後，在該次 workflow 選擇 **Re-run all jobs**。

GitHub Pages 只提供靜態網站，因此本專案使用 `output: "export"`。未來需要登入、資料庫或 Server Actions 等伺服器功能時，須改用支援 Next.js 伺服器的 hosting。詳見 [Next.js 靜態匯出文件](https://nextjs.org/docs/app/guides/static-exports)。

網站維護細節見 [WEBSITE.md](WEBSITE.md)。原始程式競賽索引保留於 [docs/competitions.md](docs/competitions.md)，年度競賽檔案位於 `public/2018/` 到 `public/2025/`，公開網址維持相同路徑。
