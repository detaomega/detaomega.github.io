export type LocalizedString = { en: string; zh: string };
const text = (en: string, zh: string): LocalizedString => ({ en, zh });

// Edit your biography, education, experience, and projects here.
export const profile = {
  name: "Ping-Yu Yang",
  initials: "PY",
  focus: text("Engineering & research", "軟體工程與研究"),
  siteUrl: "https://detaomega.github.io",
  email: "detaomega19@gmail.com",
  github: "https://github.com/detaomega",
  photo: "/assets/profile.jpg",
  cv: "/assets/Ping-Yu-Yang-CV.pdf",
  subtitle: text(
    "Computer Science · Software Engineering & Communication Research",
    "資訊工程 · 軟體工程與通訊研究",
  ),
};

export const organizations = {
  ntu: { name: "National Taiwan University", logo: "/assets/logos/ntu.jpg" },
  nycu: {
    name: "National Yang Ming Chiao Tung University",
    logo: "/assets/logos/nycu.png",
  },
  tsmc: { name: "TSMC", logo: "/assets/logos/tsmc.svg" },
  microsoft: { name: "Microsoft", logo: "/assets/logos/microsoft.svg" },
  logitech: { name: "Logitech", logo: "/assets/logos/logitech.svg" },
};
export type OrganizationId = keyof typeof organizations;

export const designReferences = [
  {
    name: "En-Ming Huang",
    url: "https://www.enmingw32.dev/",
  },
  {
    name: "Stanley Shen",
    url: "https://stanleyshen2003.github.io/me/",
  },
];

export const pages = {
  home: {
    href: "/",
    label: text("Home", "首頁"),
    title: text("Ping-Yu Yang", "Ping-Yu Yang · 個人網站"),
    heading: text("Ping-Yu Yang", "Ping-Yu Yang"),
    intro: text(
      "I'm Ping-Yu Yang, a computer science graduate from NYCU with research experience in semantic communication and deep learning at NTU. I've built software at TSMC, Microsoft, and Logitech, and enjoy turning complex problems into useful systems.",
      "我是 Ping-Yu Yang，畢業於陽明交通大學資工系，在臺大資工研究語意通訊與深度學習。曾在 TSMC、Microsoft 與 Logitech 實習，喜歡從演算法出發，把複雜的問題做成實用的系統。",
    ),
    description: text(
      "Ping-Yu Yang — software engineering, semantic communication, and deep learning. Projects, education, and experience at TSMC, Microsoft, and Logitech.",
      "Ping-Yu Yang 的個人網站：軟體工程、語意通訊與深度學習，精選專案、學歷與 TSMC、Microsoft、Logitech 工作經驗。",
    ),
  },
  about: {
    href: "/about/",
    label: text("About", "關於"),
    title: text("About · Ping-Yu Yang", "關於我 · Ping-Yu Yang"),
    heading: text("I'm Ping-Yu Yang.", "我是 Ping-Yu Yang。"),
    intro: text(
      "My work spans software engineering, algorithms, and machine learning. I enjoy understanding how things work and turning ideas into software people can use.",
      "我的經驗橫跨軟體工程、演算法與機器學習。我喜歡理解問題背後的原理，也喜歡把想法寫成能實際使用的程式。",
    ),
    description: text(
      "About Ping-Yu Yang: research interests, education at NTU and NYCU, competitive programming awards, and technical skills.",
      "關於 Ping-Yu Yang：研究方向、臺大與陽明交大的學歷、程式競賽紀錄與技術能力。",
    ),
  },
  projects: {
    href: "/projects/",
    label: text("Projects", "專案"),
    title: text("Projects · Ping-Yu Yang", "專案 · Ping-Yu Yang"),
    heading: text("A few things I've built.", "一些親手做過的專案。"),
    intro: text(
      "From machine learning and music generation to full-stack web applications. These projects helped me put the technologies I was learning into practice.",
      "從機器學習與音樂生成，到完整的網頁應用程式。這些專案讓我把想學的技術，變成實際的作品。",
    ),
    description: text(
      "Selected projects by Ping-Yu Yang: AI-generated jazz drum comping and a full-stack meal ordering platform.",
      "Ping-Yu Yang 的精選專案：AI 爵士鼓伴奏生成，以及全端員工餐點訂購平台。",
    ),
  },
  experience: {
    href: "/experience/",
    label: text("Experience", "經歷"),
    title: text("Experience · Ping-Yu Yang", "工作經歷 · Ping-Yu Yang"),
    heading: text("Where I've worked.", "我的工作經歷。"),
    intro: text(
      "Three internships at TSMC, Microsoft, and Logitech, working on enterprise platforms, mapping tools, and engineering data workflows.",
      "在 TSMC、Microsoft 與 Logitech 的三段實習，讓我參與企業平台、地圖工具與工程資料流程的開發。",
    ),
    description: text(
      "Ping-Yu Yang's software engineering internships at TSMC, Microsoft, and Logitech, including performance optimization and workflow automation.",
      "Ping-Yu Yang 在 TSMC、Microsoft、Logitech 的實習經歷，包含 API 效能優化、全端開發與流程自動化。",
    ),
  },
};
export type PageName = keyof typeof pages;
export const navigation = Object.entries(pages).map(([id, page]) => ({
  id: id as PageName,
  ...page,
}));

export const research = {
  title: text("Semantic Communication", "語意通訊研究"),
  summary: text(
    "My research interests include semantic communication, deep learning, and wireless systems, with a focus on learning-based approaches to transmitting information.",
    "我的研究方向包括語意通訊、深度學習與無線通訊，探索如何以學習式方法傳遞資訊。",
  ),
  interests: [
    text("Semantic communication", "語意通訊"),
    text("Deep learning", "深度學習"),
    text("Wireless communication", "無線通訊"),
  ],
};

export const aboutSections = [
  {
    id: "research",
    title: text("Research interests", "研究方向"),
    description: text(
      "At NTU CSIE, my research interests include semantic communication, deep learning, and wireless communication, exploring the intersection of machine learning and communication systems.",
      "在臺大資工，我的研究領域包含語意通訊、深度學習與無線通訊，探索機器學習與通訊系統的結合。",
    ),
  },
  {
    id: "engineering",
    title: text("Software engineering", "軟體工程"),
    description: text(
      "During internships at TSMC, Microsoft, and Logitech, I developed frontend and backend systems, optimized APIs, and automated data pipelines. These experiences shaped how I think about performance, scalability, and useful tools.",
      "曾在 TSMC、Microsoft 與 Logitech 的實習中開發前後端系統、優化 API，並自動化資料處理流程。這些經驗讓我更重視效能、可擴展性，以及工具能否解決實際問題。",
    ),
  },
  {
    id: "algorithms",
    title: text("Algorithms & competitive programming", "演算法與競賽"),
    description: text(
      "Competitive programming is part of my computer science background. I earned a silver medal at the ICPC Asia Taipei Regional and a third prize award at the National Collegiate Programming Contest.",
      "程式設計競賽是我資工背景的一部分。我曾獲得 ICPC 亞洲臺北區域賽銀牌，以及全國大專電腦軟體設計競賽三等獎。",
    ),
  },
];

export const education = [
  {
    id: "ntu" as const,
    degreeTitle: text("Master of Science", "理學碩士"),
    field: text("Computer Science and Information Engineering", "資訊工程學系"),
    institution: text(
      "National Taiwan University · Taipei, Taiwan",
      "國立臺灣大學 · 台灣臺北",
    ),
    dates: text("Aug 2024 — Jun 2026 (expected)", "2024.08 — 2026.06（預計）"),
    note: text(
      "Research: semantic communication, deep learning, wireless communication",
      "研究：語意通訊、深度學習、無線通訊",
    ),
  },
  {
    id: "nycu" as const,
    degreeTitle: text("Bachelor of Science", "理學學士"),
    field: text("Computer Science", "資訊工程學系"),
    institution: text(
      "National Yang Ming Chiao Tung University · Hsinchu, Taiwan",
      "國立陽明交通大學 · 台灣新竹",
    ),
    dates: text("Sep 2020 — Jun 2024", "2020.09 — 2024.06"),
    note: text(
      "Overall GPA: 4.04 / 4.3 · CS coursework GPA: 4.17 / 4.3",
      "總平均 GPA：4.04 / 4.3 · 資工課程 GPA：4.17 / 4.3",
    ),
  },
];

export const experiences = [
  {
    id: "tsmc" as const,
    organization: text("TSMC · Hsinchu, Taiwan", "TSMC · 台灣新竹"),
    role: text("IT Intern", "IT 實習生"),
    dates: text("Jul — Aug 2024", "2024.07 — 2024.08"),
    description: text(
      "Built the frontend for an internal leave-approval platform using React and optimized a core Java backend API, improving production performance, scalability, and reliability.",
      "使用 React 建置內部請假簽核平台前端，並優化 Java 後端核心 API，提升正式環境中的效能、可擴展性與可靠性。",
    ),
    achievements: [
      text(
        "Redesigned the data-access algorithm from O(n²) to O(n).",
        "重新設計資料存取演算法，將複雜度從 O(n²) 降為 O(n)。",
      ),
      text(
        "Achieved over 1,000× speedup in production.",
        "正式環境效能提升超過 1,000 倍。",
      ),
      text(
        "Supported a platform serving 20,000+ employees.",
        "平台服務超過 20,000 位員工。",
      ),
    ],
    technologies: ["React", "Java", "API optimization"],
  },
  {
    id: "microsoft" as const,
    organization: text(
      "Microsoft · Bing Maps Directions Team · Taiwan",
      "Microsoft · Bing Maps 路線團隊 · 台灣",
    ),
    role: text("R&D Intern", "研發實習生"),
    dates: text("Jul 2023 — Jun 2024", "2023.07 — 2024.06"),
    description: text(
      "Developed and deployed a full-stack internal routing debugger, helping the Bing Maps team reduce time spent debugging map quality issues.",
      "開發並部署內部全端路線除錯工具，協助 Bing Maps 團隊縮短地圖品質問題的除錯時間。",
    ),
    achievements: [
      text(
        "Optimized C# backend APIs to automate complex data retrieval.",
        "優化 C# 後端 API，自動化複雜的資料擷取。",
      ),
      text(
        "Reduced redundant operational steps and improved system response time.",
        "減少重複操作並改善系統回應速度。",
      ),
    ],
    technologies: ["C#", "Full-stack development", "Internal tooling"],
  },
  {
    id: "logitech" as const,
    organization: text("Logitech · Hsinchu, Taiwan", "Logitech · 台灣新竹"),
    role: text("Software Engineer Intern", "軟體工程實習生"),
    dates: text("Mar — Jun 2023", "2023.03 — 2023.06"),
    description: text(
      "Built a Python/Flask backend to automate and scale data parsing pipelines from Excel inputs, replacing a highly manual data management process.",
      "使用 Python 與 Flask 建置後端，自動化並擴展 Excel 資料解析流程，取代高度依賴人工的資料管理工作。",
    ),
    achievements: [
      text("Reduced manual operations by over 60%.", "人工操作減少超過 60%。"),
      text(
        "Delivered data to an Angular visualization tool used by the engineering team.",
        "將資料串接至工程團隊使用的 Angular 視覺化工具。",
      ),
    ],
    technologies: ["Python", "Flask", "Angular", "Data pipelines"],
  },
];

export const projects = [
  {
    id: "jazz",
    icon: "music" as const,
    title: text("Generating Jazz Drum Comping with AI", "AI 爵士鼓伴奏生成"),
    shortTitle: text("Jazz Drum Comping with AI", "AI 爵士鼓伴奏"),
    summary: text(
      "A TensorFlow-based CNN/RNN pipeline for generating jazz drum comping, from MIDI preprocessing to sequence-model architecture.",
      "使用 TensorFlow 建立 CNN / RNN 模型，從 MIDI 資料前處理到序列模型架構，實作爵士鼓伴奏生成。",
    ),
    description: text(
      "Built a TensorFlow-based CNN/RNN pipeline to generate jazz drum comping. Designed the MIDI preprocessing stage and sequence-model architecture from scratch.",
      "使用 TensorFlow 建立 CNN / RNN 管線，生成爵士鼓伴奏。從頭設計 MIDI 前處理流程，以及用於音樂生成的序列模型架構。",
    ),
    details: [
      text("MIDI data preprocessing", "MIDI 資料前處理"),
      text("CNN / RNN sequence modeling", "CNN / RNN 序列模型"),
      text("Jazz drum accompaniment generation", "爵士鼓伴奏生成"),
    ],
    technologies: ["Python", "TensorFlow", "CNN / RNN", "MIDI"],
    href: "https://github.com/detaomega/Generating_jazz_drum_comping_with_AI",
  },
  {
    id: "meals",
    icon: "code" as const,
    title: text("Meal Provider Platform", "員工餐點訂購平台"),
    shortTitle: text("Meal Provider Platform", "員工餐點訂購平台"),
    summary: text(
      "A staff restaurant platform for publishing meals and ordering combos, built with Vue 3, TypeScript, Flask, SQL, and Docker.",
      "提供店家上架餐點與使用者訂購套餐的平台，使用 Vue 3、TypeScript、Flask、SQL 與 Docker 建置。",
    ),
    description: text(
      "A staff restaurant platform where owners can publish meals and users can order combos. Built a responsive Vue 3/TypeScript frontend and Flask APIs with SQL storage for owners, users, and meals.",
      "員工餐廳訂購平台，店家可新增餐點，使用者可訂購套餐。以 Vue 3 與 TypeScript 建置響應式前端，使用 Flask API 與 SQL 管理店家、使用者及餐點資料。",
    ),
    details: [
      text(
        "Responsive Vue 3 & TypeScript frontend",
        "響應式 Vue 3 與 TypeScript 前端",
      ),
      text("Flask REST APIs & SQL database", "Flask REST API 與 SQL 資料庫"),
      text("Docker application packaging", "以 Docker 封裝應用程式"),
    ],
    technologies: ["Vue 3", "TypeScript", "Flask", "SQL", "Docker"],
    href: "https://github.com/NYCUCloudNativeDevelopment/Meal-Provider",
  },
];

export const awards = [
  {
    year: "2021",
    title: text("ICPC Asia Taipei Regional", "ICPC 亞洲臺北區域賽"),
    result: text("Silver medal, 12th place", "銀牌，第 12 名"),
  },
  {
    year: "2021",
    title: text(
      "National Collegiate Programming Contest",
      "全國大專電腦軟體設計競賽",
    ),
    result: text("3rd prize award", "三等獎"),
  },
  {
    year: "2021",
    title: text(
      "NYCU Annual Programming Competition",
      "陽明交通大學年度程式設計競賽",
    ),
    result: text("2nd place", "第 2 名"),
  },
  {
    year: "2021 — 22",
    title: text("Academic Achievement Awards", "書卷獎"),
    result: text(
      "Top 5% · Fall 2021 GPA 4.25 · Spring 2022 GPA 4.26",
      "前 5% · 2021 秋季 GPA 4.25 · 2022 春季 GPA 4.26",
    ),
  },
];

export const skills = [
  {
    title: text("Languages", "程式語言"),
    description: text(
      "C / C++, C#, Python, Java, Go, TypeScript, SQL, Shell Script",
      "C / C++、C#、Python、Java、Go、TypeScript、SQL、Shell Script",
    ),
  },
  {
    title: text("Frameworks & libraries", "框架與函式庫"),
    description: text(
      "Vue 3, React, Angular, Flask, PyTorch, TensorFlow, Keras, Scikit-learn",
      "Vue 3、React、Angular、Flask、PyTorch、TensorFlow、Keras、Scikit-learn",
    ),
  },
  {
    title: text("Tools & platforms", "工具與平台"),
    description: text(
      "Git, Linux, Docker, system and network administration",
      "Git、Linux、Docker、系統與網路管理",
    ),
  },
];

export const labels = {
  designReferences: text("Design references:", "設計參考："),
  introduction: text("Introduction", "自我介紹"),
  contents: text("On this page", "本頁內容"),
  biography: text("Bio", "關於我"),
  selectedProjects: text("Selected projects", "精選專案"),
  allProjects: text("All projects", "完整專案"),
  viewDetails: text("View details", "查看細節"),
  research: text("Research interests", "研究方向"),
  viewProject: text("View project", "查看專案"),
  githubProject: text("View project on GitHub", "在 GitHub 查看專案"),
  academicBackground: text("My academic background", "關於我的學習背景"),
  awards: text("Awards & achievements", "競賽與學業紀錄"),
  work: text("Work", "工作經歷"),
  moreWork: text("More about my work", "完整工作經歷"),
  exploreExperience: text("Explore my experience", "查看工作經歷"),
  downloadCV: text("Download my CV", "下載履歷"),
  education: text("Education", "學歷"),
  skills: text("Skills", "技術能力"),
  moreCode: text(
    "You can find more code and learning projects on my GitHub.",
    "更多程式碼與學習紀錄，可以在我的 GitHub 找到。",
  ),
  connect: text("Let's connect.", "保持聯繫"),
  contact: text(
    "Feel free to reach out about software engineering, communication research, or ideas you'd like to share.",
    "歡迎聊聊軟體工程、通訊研究，或交流想法。",
  ),
};

export const homeSections = [
  { id: "introduction", label: labels.introduction },
  { id: "education", label: labels.education },
  { id: "experience", label: pages.experience.label },
  { id: "projects", label: pages.projects.label },
  { id: "awards", label: labels.awards },
  { id: "skills", label: labels.skills },
];
