# 設計參考與圖示來源

此檔案保留內部素材與早期設計紀錄；網站頁尾不顯示設計參考署名。

- [En-Ming Huang](https://www.enmingw32.dev/)：參考學歷與經歷以真實校徽／公司 logo 識別機構，以及展開詳細內容的呈現方式。
- [Stanley Shen](https://stanleyshen2003.github.io/me/)：早期版本的個人作品集資訊結構與多頁導覽參考。

現版採大地色配色、無襯線字體、PY 個人識別、水平章節導覽與矩形照片。學歷使用並排卡片，工作經歷使用折疊清單，另有 Markdown Blog 與旅行地圖。個人履歷內容依 Ping-Yu Yang 的 CV 編寫，預計畢業日期與 NVIDIA 即將到職資訊依本人補充更新。

| 圖示         | 本機檔案                            | 來源                                                                                                                                                                                                                             |
| ------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 臺大校徽     | `public/assets/logos/ntu.jpg`       | [臺大識別](https://www.ntu.edu.tw/about/CIS.html)，[圖片](https://www.ntu.edu.tw/images/resized/cis_mark-295w.jpeg)                                                                                                              |
| 陽明交大校徽 | `public/assets/logos/nycu.png`      | [NYCU Secretariat — Seal](https://sec.nycu.edu.tw/sec/en/app/artwebsite/view?module=artwebsite&id=221&serno=ffedfbc5-7dbb-423b-b27a-83d7b0b400b8)，[圖片](https://sec.nycu.edu.tw/userfiles/nycuch/images/20230915165232040.png) |
| TSMC         | `public/assets/logos/tsmc.svg`      | [Wikimedia — Tsmc.svg](https://en.wikipedia.org/wiki/File:Tsmc.svg)                                                                                                                                                              |
| Microsoft    | `public/assets/logos/microsoft.svg` | Microsoft 四色方塊標誌，以 SVG 幾何圖形呈現                                                                                                                                                                                      |
| Logitech     | `public/assets/logos/logitech.svg`  | [Wikimedia — Logitech logo.svg](https://commons.wikimedia.org/wiki/File:Logitech_logo.svg)                                                                                                                                       |

NVIDIA 圖示存放於 `public/assets/logos/nvidia.svg`，取自 [NVIDIA 官方 Logo and Brand Guidelines](https://www.nvidia.com/en-us/about-nvidia/legal-info/logo-brand-usage/) 的垂直版 SVG。

學校和公司圖示保持原始配色與比例，以 CSS `object-fit: contain` 顯示。一般導覽與章節圖示由 `src/components/icons.tsx` 的 SVG 線條圖形提供。

旅行地圖資料取自 [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/)（public domain）的 [110m 國界](https://www.naturalearthdata.com/downloads/110m-cultural-vectors/110m-admin-0-countries/) 與 50m 國界，小型國家取中心定位點。使用 [d3-geo](https://github.com/d3/d3-geo) 的 Natural Earth 投影，產生本機 SVG 路徑資料 `src/content/world-map.json`，瀏覽時不連線外部地圖服務。

更新底圖時，下載 [110m GeoJSON](https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson) 與 [50m GeoJSON](https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson)，再執行 `node scripts/generate-world-map.mjs /path/to/110m.geojson /path/to/50m.geojson`。底圖只需偶爾更新，平常新增旅行僅修改 `travel.ts`。
