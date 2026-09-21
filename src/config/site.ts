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

  /** 提案 Demo：禁止搜尋引擎收錄（董事長硬條件） */
  crawl: {
    robotsMeta: "noindex, nofollow, noarchive",
  },

  proposal: {
    storageKey: "narciss-proposal-unlocked",
    gateTitle: "提案預覽須知",
    gateBody:
      "本站為琢奧科技行銷提案 Demo，未公開、非店家委託、未獲授權上線。使用公開資料與品牌素材僅供提案討論；正式授權前請勿對外轉傳或當成官方網站。",
    passwordLabel: "預覽密碼",
    submitLabel: "進入提案",
    wrongPassword: "密碼錯誤，請再試一次。",
    securityNote: "門禁僅防誤入，非正式資安。",
    gateFooter: "琢奧科技｜僅供提案",
  },

  legalChrome: {
    banner: "提案 Demo｜非官方站",
    toggleLabel: "免責",
    disclaimerTitle: "提案 Demo 免責",
    disclaimerBody:
      "本網站由琢奧科技製作，僅供內部或客戶提案預覽，並非 NARCISS HAIR 官方網站，亦未獲店家授權對外上線。站內文案、影像整理自 Google Maps、Instagram 等公開來源，僅供討論行銷方向；時段、價格、優惠以店家現場為準。未經授權請勿截圖對外宣稱為已上線官網。",
  },

  demo: {
    gateTitle: "提案預覽須知",
    gateBody: "",
    gateButton: "進入提案",
    ribbon: "提案 Demo",
    disclaimer:
      "提案 Demo · 未授權公開 · 非官方站 · 資料來自公開來源",
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
    { label: "到店", href: "#info" },
    { label: "預約", href: "https://lin.ee/Bc0WDRi" },
  ],

  hero: {
    layout: "immersive" as "editorial" | "split" | "immersive",
    title: "一眼，是你的完成髮",
    titleHighlight: "",
    subtitle: "霧感線條 · 下一步用 LINE 預約",
    image: "/gallery/work-11.webp",
    imageAlt: "長波浪霧感髮型作品——客人完成後的髮型展示",
    eyebrow: "完成髮",
    primaryCta: { label: "LINE 預約", href: "https://lin.ee/Bc0WDRi" },
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
    image: "/gallery/work-9.webp",
    imageAlt: "NARCISS HAIR 店外招牌與巷弄入口",
  },

  gallery: {
    eyebrow: "作品",
    title: "髮型作品",
    lead: "只收完成髮——霧感染護、長髮線條與自然捲度。",
    zoneDemoLabel: "僅供 Demo｜公開整理影像，非店家授權真照",
    featured: [
      {
        src: "/gallery/work-11.webp",
        alt: "長波浪捲髮完成造型展示",
      },
      {
        src: "/gallery/demo-hair-1.webp",
        alt: "霧感挑染長髮完成線條（AI 質感示意）",
        aiDemo: true,
      },
      {
        src: "/gallery/demo-hair-2.webp",
        alt: "霧感直髮光澤完成造型（AI 質感示意）",
        aiDemo: true,
      },
    ],
    more: [
      {
        src: "/gallery/demo-hair-3.webp",
        alt: "層次短髮完成造型（AI 質感示意）",
        aiDemo: true,
      },
      {
        src: "/gallery/demo-hair-4.webp",
        alt: "側向長髮波浪完成線條（AI 質感示意）",
        aiDemo: true,
      },
      {
        src: "/gallery/demo-hair-5.webp",
        alt: "染護色調髮色特寫（AI 質感示意）",
        aiDemo: true,
      },
    ],
  },

  trust: {
    eyebrow: "評價與信任",
    title: "口碑，自己看最準",
    intro:
      "本站是提案 Demo，不在網頁上捏造星等。到 IG 看髮型線條，到 Google 看公開留言——合不合你的日常，由你決定。",
    actions: [
      {
        label: "IG 看作品",
        href: "https://www.instagram.com/narciss.hair/",
        variant: "primary" as const,
      },
      {
        label: "Google 公開評價",
        href: "https://www.google.com/maps/search/?api=1&query=NARCISS+HAIR+台北市中山區中山北路二段16巷16號",
        variant: "secondary" as const,
      },
    ],
    items: [
      {
        title: "作品就是語言",
        body: "霧感、自然捲、層次剪——在 IG 動態裡比任何網站文案更直覺。",
      },
      {
        title: "巷弄店，資訊可核",
        body: "地址、時段、寵物友善等敘述整理自公開地圖與社群，隨時可交叉比對。",
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
