// ============================================================================
// NARCISS HAIR — 單一設定檔（Astro-Chalet 家）
// ============================================================================

export const SITE = {
  url: "https://narciss-hair.vercel.app",
  lang: "zh-TW",
  ogLocale: "zh_TW",
  name: "NARCISS HAIR",
  tagline: "中山站巷弄裡，用髮型說你的日常",
  description:
    "NARCISS HAIR 台北中山區美髮沙龍 Demo。剪髮、染髮、護髮、造型設計，寵物友善空間。捷運中山站步行約 5 分鐘。",

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
    { label: "服務", href: "/#services" },
    { label: "關於", href: "/#about" },
    { label: "作品", href: "/#gallery" },
    { label: "信任", href: "/#trust" },
    { label: "到店", href: "/#info" },
    { label: "FAQ", href: "/#faq" },
  ],

  hero: {
    layout: "editorial" as "editorial" | "split" | "immersive",
    title: "NARCISS HAIR",
    titleHighlight: "",
    subtitle:
      "剪染燙護與造型設計，藏在中山站後巷的工業風沙龍；公開資訊亦提及寵物友善。",
    image: "/gallery/work-9.webp",
    imageAlt: "NARCISS HAIR 沙龍空間與髮型作品氛圍",
    eyebrow: "Zhongshan · Taipei",
    primaryCta: { label: "打電話", href: "tel:+886225636233" },
    secondaryCta: { label: "LINE 預約", href: "https://lin.ee/Bc0WDRi" },
    tertiaryCta: { label: "Instagram 看作品", href: "https://www.instagram.com/narciss.hair/" },
    highlights: [] as string[],
  },

  services: {
    eyebrow: "Services",
    title: "服務項目",
    intro: "依髮質與生活節奏設計，不是制式套餐卡；以下為公開資料整理之主要項目。",
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
    eyebrow: "About",
    title: "關於沙龍",
    paragraphs: [
      "NARCISS HAIR 藏在中山站後巷，工業風搭配木質與灰色牆面，店門前植栽與石雕造景，是巷弄裡可以慢下來的理髮空間。",
      "公開資訊顯示沙龍已在此地經營十餘年。若你帶著毛孩一起來，請在預約時告知——空間標示為寵物友善。",
    ],
    image: "/gallery/work-10.webp",
    imageAlt: "NARCISS HAIR 室內環境",
  },

  gallery: {
    eyebrow: "Gallery",
    title: "作品與空間",
    images: [
      { src: "/gallery/work-1.webp", alt: "髮廊環境與造型" },
      { src: "/gallery/work-3.webp", alt: "室內空間" },
      { src: "/gallery/work-5.webp", alt: "捲髮造型" },
      { src: "/gallery/work-11.webp", alt: "造型分享" },
      { src: "/gallery/work-4.webp", alt: "髮型設計" },
      { src: "/gallery/work-2.webp", alt: "染髮成果" },
      { src: "/gallery/work-9.webp", alt: "沙龍氛圍" },
    ],
  },

  trust: {
    eyebrow: "Trust",
    title: "為什麼選這裡",
    intro: "本 Demo 不捏造星等或評價文案；請至 Google Maps、Instagram 等公開平台自行查證。",
    items: [
      {
        title: "公開評價可自查",
        body: "我們不在網站上嵌入假評價；你可以在 Google 等平台的公開留言中閱讀真實回饋。",
      },
      {
        title: "巷弄裡的穩定據點",
        body: "鄰近捷運中山站，公開敘述提及十餘年在地經營，適合想找固定設計師的客人。",
      },
      {
        title: "空間與氛圍",
        body: "工業風、木質、植栽造景——公開照片裡常被提到的 chill 沙龍感。",
      },
    ],
    linkLabel: "在 Google 地圖查看公開資訊 →",
  },

  reviews: {
    eyebrow: "",
    title: "",
    allReviewsUrl: "",
    items: [] as { author: string; rating: number; text: string }[],
  },

  faq: {
    eyebrow: "FAQ",
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
    eyebrow: "Contact",
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
    infoEyebrow: "Visit",
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
