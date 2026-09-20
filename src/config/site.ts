// ============================================================================
// NARCISS HAIR — 單一設定檔（Astro-Chalet 家）
// ============================================================================

export const SITE = {
  url: "https://narciss-hair.vercel.app",
  lang: "zh-TW",
  ogLocale: "zh_TW",
  name: "NARCISS HAIR",
  tagline: "中山站後巷的高質感美髮，剪染護一次搞定",
  description:
    "NARCISS HAIR 台北中山區美髮沙龍。霧感／自然系造型，電話或 LINE／IG 預約。公開資料 Demo，非店家委託。",

  vi: {
    imageWatermark: "僅供 Demo｜琢奧",
  },

  demo: {
    gateTitle: "僅供 Demo 使用",
    gateBody:
      "本站為琢奧科技展示用行銷 Demo，內容整理自 Google Maps、Instagram 等公開來源，非 NARCISS HAIR 委託製作。",
    gateButton: "看 Demo",
    ribbon: "僅供 Demo 使用",
    disclaimer:
      "本站僅供 Demo · 資料來自公開來源 · 非店家委託 · 時段與優惠可能變更",
  },

  agency: {
    name: "琢奧科技",
    credit: "由琢奧科技製作",
  },

  business: {
    schemaType: "HairSalon",
    phone: "+886225636233",
    phoneDisplay: "02-2563-6233",
    lineUrl: "https://lin.ee/Bc0WDRi",
    instagramUrl: "https://www.instagram.com/narciss.hair/",
    email: "",
    address: {
      street: "中山北路二段16巷16號",
      postalCode: "104",
      city: "台北市中山區",
      country: "TW",
    },
    geo: { latitude: 25.0522, longitude: 121.5206 },
    priceRange: "",
    googleBusinessUrl:
      "https://www.google.com/maps/search/?api=1&query=NARCISS+HAIR+台北市中山區中山北路二段16巷16號",
    socialProfiles: [
      "https://www.instagram.com/narciss.hair/",
      "https://lin.ee/Bc0WDRi",
    ],
    accessNote: "捷運中山站 4 號出口，步行約 5 分鐘",
    petFriendly: true,
  },

  openingHours: [
    { label: "週二", days: [1], closed: true },
    { label: "週三－週五", days: [2, 3, 4], opens: "11:00", closes: "20:00" },
    { label: "週六－週日", days: [5, 6], opens: "11:00", closes: "19:00" },
    { label: "週一", days: [0], opens: "11:00", closes: "20:00" },
  ] as OpeningHours[],

  navigation: [
    { label: "作品", href: "#gallery" },
    { label: "關於", href: "#about" },
    { label: "評價與信任", href: "#trust" },
    { label: "服務", href: "#services" },
    { label: "到店", href: "#info" },
    { label: "常見問題", href: "#faq" },
  ],

  hero: {
    layout: "immersive" as "editorial" | "split" | "immersive",
    title: "中山站高質感美髮",
    titleHighlight: "",
    subtitle: "剪染護一次搞定 · 電話或 LINE 預約",
    image: "/gallery/work-9.webp",
    imageAlt: "NARCISS HAIR 沙龍空間與髮型作品氛圍",
    eyebrow: "NARCISS HAIR",
    primaryCta: { label: "打電話", href: "tel:+886225636233" },
    secondaryCta: { label: "LINE 預約", href: "https://lin.ee/Bc0WDRi" },
    tertiaryCta: { label: "到 Instagram 看作品", href: "https://www.instagram.com/narciss.hair/" },
    highlights: ["寵物友善", "中山站步行約 5 分鐘"] as string[],
  },

  services: {
    eyebrow: "服務",
    title: "服務一覽",
    intro: "完整項目與報價請來電或 LINE 詢問；以下為公開資料整理。",
    items: [
      {
        title: "剪髮設計",
        description:
          "依臉型、髮量與整理習慣調整層次，讓線條好打理、輪廓立體。",
        icon: "scissors",
        image: "/gallery/work-7.webp",
        imageAlt: "剪髮造型作品",
      },
      {
        title: "染髮",
        description:
          "質感色調與挑染；公開資訊曾提及可不漂髮的冷色選項，實際依現場髮況為準。",
        icon: "palette",
        image: "/gallery/work-2.webp",
        imageAlt: "染髮作品",
      },
      {
        title: "護髮養護",
        description: "染燙前後的頭皮隔離與髮質養護，讓造型更持久、更有光澤。",
        icon: "sparkle",
        image: "/gallery/work-6.webp",
        imageAlt: "護髮後光澤",
      },
      {
        title: "燙髮塑型",
        description: "自然捲度與蓬鬆感，強調可日常吹整的輕盈弧度。",
        icon: "wave",
        image: "/gallery/work-8.webp",
        imageAlt: "燙髮作品",
      },
      {
        title: "造型設計",
        description: "活動或重要場合的整體造型，建議事先在 LINE 或來電溝通。",
        icon: "star",
        image: "/gallery/work-4.webp",
        imageAlt: "造型設計",
      },
    ],
  },

  about: {
    eyebrow: "關於",
    title: "關於沙龍",
    paragraphs: [
      "NARCISS HAIR 藏在中山站後巷，工業風搭配木質與灰色牆面，店門前植栽與石雕造景，是巷弄裡可以慢下來的理髮空間。",
      "公開資訊顯示沙龍已在此地經營十餘年。若你帶著毛孩一起來，請在預約時告知——空間標示為寵物友善。",
    ],
    image: "/gallery/work-10.webp",
    imageAlt: "NARCISS HAIR 室內環境",
  },

  gallery: {
    eyebrow: "作品",
    title: "作品與空間",
    lead: "霧感造型與沙龍氛圍——先看作品，再決定要不要預約。",
    images: [
      {
        src: "/gallery/work-11.webp",
        alt: "長波浪捲髮造型作品展示",
      },
      {
        src: "/gallery/work-10.webp",
        alt: "設計師與客人的髮型完成現場",
      },
      {
        src: "/gallery/work-4.webp",
        alt: "沙龍內模特兒造型髮作品",
      },
      {
        src: "/gallery/work-7.webp",
        alt: "設計師為客人剪染造型的工作畫面",
      },
      {
        src: "/gallery/work-6.webp",
        alt: "染髮進行中的鏡台與色彩調配",
      },
      {
        src: "/gallery/work-5.webp",
        alt: "沙龍鏡台與燙染工作區",
      },
      {
        src: "/gallery/work-9.webp",
        alt: "NARCISS HAIR 店外招牌與巷弄入口",
      },
    ],
  },

  trust: {
    eyebrow: "評價與信任",
    title: "想看真實口碑？",
    intro:
      "本站是行銷 Demo，不在網頁上捏造星等或評語。請直接到 Instagram 看作品風格，或到 Google 地圖閱讀公開留言，自行確認是否合適。",
    actions: [
      {
        label: "到 IG 看作品",
        href: "https://www.instagram.com/narciss.hair/",
        variant: "primary" as const,
      },
      {
        label: "到 Google 看公開評價",
        href: "https://www.google.com/maps/search/?api=1&query=NARCISS+HAIR+台北市中山區中山北路二段16巷16號",
        variant: "secondary" as const,
      },
    ],
    items: [
      {
        title: "作品即名片",
        body: "霧感、自然系造型可在 IG 動態與標記中直接感受，比網站假評價更有說服力。",
      },
      {
        title: "公開資訊可核對",
        body: "地址、時段、寵物友善等敘述皆整理自 Google Maps 等公開來源，隨時可交叉比對。",
      },
    ],
  },

  reviews: {
    eyebrow: "",
    title: "",
    allReviewsUrl: "",
    items: [] as { author: string; rating: number; text: string }[],
  },

  faq: {
    eyebrow: "常見問題",
    title: "常見問題",
    items: [
      {
        question: "週二是否公休？",
        answer:
          "依目前公開資訊為每週二公休；國定假日時段可能調整，預約前請以 LINE 或來電確認。",
      },
      {
        question: "可以帶寵物嗎？",
        answer: "公開資訊標示為寵物友善，建議預約時先告知，方便店家安排。",
      },
      {
        question: "這個網站是官方網站嗎？",
        answer: "不是。本站為琢奧科技 Demo，僅供展示行銷站能力，非店家委託。",
      },
    ],
  },

  ctaBanner: {
    title: "準備好了就聯絡我們",
    text: "電話或 LINE 擇一即可；IG 適合先看作品風格。",
    button: { label: "打電話", href: "tel:+886225636233" },
    buttonSecondary: { label: "LINE 預約", href: "https://lin.ee/Bc0WDRi" },
  },

  contact: {
    eyebrow: "聯絡",
    title: "預約與聯絡",
    intro: "無後台表單、無資料庫——請直接來電、加 LINE，或到 IG 看作品。",
    endpoint: "",
    honeypotField: "website",
  },

  legal: {
    companyType: "Demo 展示站（琢奧科技）",
    registrationNumber: "—",
    publisher: "琢奧科技",
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      url: "https://vercel.com",
    },
  },

  ui: {
    skipToContent: "跳至主要內容",
    menuOpenLabel: "開啟選單",
    closedLabel: "公休",
    hoursTitle: "營業時間",
    findUsTitle: "地址",
    infoEyebrow: "到店",
    infoTitle: "營業時間與地址",
    directionsLabel: "Google 地圖導航",
    googleProfileLabel: "Google 地圖上的店家",
    readAllReviews: "在 Google 查看公開評價 →",
    ratingLabel: "評分：",
    ratingOutOf: "／5",
    reviewsScoreLabel: "（本 Demo 不顯示假評價）",
    formNameLabel: "姓名",
    formEmailLabel: "Email",
    formMessageLabel: "訊息",
    formSubmitLabel: "送出",
    formHoneypotLabel: "請留空",
    legalNoticeLabel: "法律聲明",
    privacyPolicyLabel: "隱私權",
    allRightsReserved: "僅供 Demo",
    notFoundTitle: "找不到頁面",
    notFoundText: "您要找的頁面不存在或已移動。",
    notFoundCta: "返回首頁",
    demoImageCredit: "公開來源影像",
    imageWatermark: "僅供 Demo｜琢奧",
    petFriendlyLabel: "寵物友善",
  },
} as const;

export interface OpeningHours {
  label: string;
  days: number[];
  opens?: string;
  closes?: string;
  closed?: boolean;
}

export type SiteConfig = typeof SITE;
