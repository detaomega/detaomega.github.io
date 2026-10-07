# 設計參考與圖示來源

設計參考來源也公開列在網站每一頁的頁尾，英文顯示「Design references」，繁體中文顯示「設計參考」，並提供可點擊的原網站連結。

- [En-Ming Huang](https://www.enmingw32.dev/)：參考學歷與經歷以真實校徽／公司 logo 識別機構，以及展開詳細內容的呈現方式。
- [Stanley Shen](https://stanleyshen2003.github.io/me/)：早期版本的個人作品集資訊結構與多頁導覽參考。

現版重新調整為藍灰配色、無襯線字體、PY 個人識別、水平章節導覽與矩形照片。學歷使用並排卡片，工作經歷使用折疊清單，專案使用雙欄卡片。所有個人內容依 Ping-Yu Yang 的 CV 編寫。

| 圖示         | 本機檔案                            | 來源                                                                                                                                                                                                                             |
| ------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 臺大校徽     | `public/assets/logos/ntu.jpg`       | [臺大識別](https://www.ntu.edu.tw/about/CIS.html)，[圖片](https://www.ntu.edu.tw/images/resized/cis_mark-295w.jpeg)                                                                                                              |
| 陽明交大校徽 | `public/assets/logos/nycu.png`      | [NYCU Secretariat — Seal](https://sec.nycu.edu.tw/sec/en/app/artwebsite/view?module=artwebsite&id=221&serno=ffedfbc5-7dbb-423b-b27a-83d7b0b400b8)，[圖片](https://sec.nycu.edu.tw/userfiles/nycuch/images/20230915165232040.png) |
| TSMC         | `public/assets/logos/tsmc.svg`      | [Wikimedia — Tsmc.svg](https://en.wikipedia.org/wiki/File:Tsmc.svg)                                                                                                                                                              |
| Microsoft    | `public/assets/logos/microsoft.svg` | Microsoft 四色方塊標誌，以 SVG 幾何圖形呈現                                                                                                                                                                                      |
| Logitech     | `public/assets/logos/logitech.svg`  | [Wikimedia — Logitech logo.svg](https://commons.wikimedia.org/wiki/File:Logitech_logo.svg)                                                                                                                                       |

學校和公司圖示保持原始配色與比例，以 CSS `object-fit: contain` 顯示。一般導覽與章節圖示由 `src/components/icons.tsx` 的 SVG 線條圖形提供。
