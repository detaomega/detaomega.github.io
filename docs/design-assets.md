# 設計參考與圖示來源

版面參考：[En-Ming Huang](https://www.enmingw32.dev/)。採用米白背景、深藍文字、章節導覽與可展開的直式履歷時間軸；內容依 Ping-Yu Yang 的 CV 編寫。

| 圖示         | 本機檔案                            | 來源                                                                                                                                                                                                                             |
| ------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 臺大校徽     | `public/assets/logos/ntu.jpg`       | [臺大識別](https://www.ntu.edu.tw/about/CIS.html)，[圖片](https://www.ntu.edu.tw/images/resized/cis_mark-295w.jpeg)                                                                                                              |
| 陽明交大校徽 | `public/assets/logos/nycu.png`      | [NYCU Secretariat — Seal](https://sec.nycu.edu.tw/sec/en/app/artwebsite/view?module=artwebsite&id=221&serno=ffedfbc5-7dbb-423b-b27a-83d7b0b400b8)，[圖片](https://sec.nycu.edu.tw/userfiles/nycuch/images/20230915165232040.png) |
| TSMC         | `public/assets/logos/tsmc.svg`      | [Wikimedia — Tsmc.svg](https://en.wikipedia.org/wiki/File:Tsmc.svg)                                                                                                                                                              |
| Microsoft    | `public/assets/logos/microsoft.svg` | Microsoft 四色方塊標誌，以 SVG 幾何圖形呈現                                                                                                                                                                                      |
| Logitech     | `public/assets/logos/logitech.svg`  | [Wikimedia — Logitech logo.svg](https://commons.wikimedia.org/wiki/File:Logitech_logo.svg)                                                                                                                                       |

學校和公司圖示保持原始配色與比例，以 CSS `object-fit: contain` 顯示。一般導覽與章節圖示由 `src/components/icons.tsx` 的 SVG 線條圖形提供。
