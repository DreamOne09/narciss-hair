/**
 * NARCISS HAIR — 單一設定檔（Astro-Chalet 哲學）
 * 文案、聯絡、時段、服務、FAQ、SEO 皆在此修改。
 */
export const site = {
  lang: "zh-TW" as const,
  schemaType: "HairSalon" as const,
  url: "https://narciss-hair.vercel.app",

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
    name: "NARCISS HAIR",
    nameAlt: "Narciss Hair",
    tagline: "中山站巷弄裡，用髮型說你的日常",
    subline: "剪染燙護 · 寵物友善 · 工業風木質空間",
    address: "台北市中山區中山北路二段16巷16號",
    addressLocality: "台北市",
    addressRegion: "中山區",
    postalCode: "104",
    phoneDisplay: "02-2563-6233",
    phoneTel: "tel:+886225636233",
    instagram: "https://www.instagram.com/narciss.hair/",
    line: "https://lin.ee/Bc0WDRi",
    lineLabel: "LINE 預約",
    phoneLabel: "打電話",
    igLabel: "Instagram",
    access: "捷運中山站 4 號出口，步行約 5 分鐘",
    petFriendly: true,
    geo: {
      latitude: 25.0522,
      longitude: 121.5206,
    },
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=NARCISS+HAIR+台北市中山區中山北路二段16巷16號",
    mapsEmbed:
      "https://maps.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E4%B8%AD%E5%B1%B1%E5%8C%97%E8%B7%AF%E4%BA%8C%E6%AE%B516%E5%B7%B716%E8%99%9F&output=embed",
  },

  hours: [
    { label: "週二", value: "公休", closed: true },
    { label: "週三至週一", value: "11:00 – 20:00", closed: false },
    { label: "國定假日", value: "11:00 – 19:00", closed: false, note: "依公開資訊，請預約前確認" },
  ],

  seo: {
    title: "NARCISS HAIR｜中山站美髮沙龍",
    description:
      "NARCISS HAIR 台北中山區髮廊。剪髮、染髮、護髮、造型設計，寵物友善空間。捷運中山站步行約 5 分鐘。",
    ogImage: "/gallery/work-9.webp",
  },

  hero: {
    image: "/gallery/work-9.webp",
    imageAlt: "NARCISS HAIR 沙龍空間與髮型作品氛圍",
    eyebrow: "Zhongshan · Taipei",
  },

  services: {
    title: "服務",
    lead: "從日常修剪到完整改造，依你的髮質與生活節奏一起設計。",
    items: [
      {
        id: "cut",
        title: "剪髮設計",
        body: "依臉型、髮量與整理習慣調整層次，讓線條好打理、輪廓立體。",
        image: "/gallery/work-7.webp",
        imageAlt: "剪髮造型作品",
      },
      {
        id: "color",
        title: "染髮",
        body: "質感色調與挑染設計；公開資訊曾提及可不漂髮呈現冷色調，實際依現場髮況為準。",
        image: "/gallery/work-2.webp",
        imageAlt: "染髮作品展示",
      },
      {
        id: "perm",
        title: "燙髮塑型",
        body: "自然捲度與蓬鬆感，強調輕盈、可日常吹整的弧度。",
        image: "/gallery/work-8.webp",
        imageAlt: "燙髮作品",
      },
      {
        id: "care",
        title: "護髮養護",
        body: "染燙前後的頭皮隔離與髮質養護，讓造型更持久、更有光澤。",
        image: "/gallery/work-6.webp",
        imageAlt: "護髮後髮質光澤",
      },
      {
        id: "style",
        title: "造型設計",
        body: "活動、拍攝或重要場合的整體造型，與設計師事先溝通時段與需求。",
        image: "/gallery/work-4.webp",
        imageAlt: "造型設計作品",
      },
    ],
  },

  about: {
    title: "關於沙龍",
    paragraphs: [
      "NARCISS HAIR 藏在中山站後巷，工業風搭配木質與灰色牆面，店門前植栽與石雕造景，是巷弄裡一個可以慢下來的理髮空間。",
      "公開資訊顯示沙龍已在此地經營十餘年；若你帶著毛孩一起來，空間也標示為寵物友善，歡迎事先在 LINE 或來電告知。",
    ],
    image: "/gallery/work-10.webp",
    imageAlt: "NARCISS HAIR 室內環境",
    stats: [
      { value: "10+", label: "年在地經營（公開資訊）" },
      { value: "寵物", label: "友善空間" },
      { value: "中山站", label: "步行約 5 分鐘" },
    ],
  },

  gallery: {
    title: "作品與空間",
    lead: "公開來源整理之環境與造型影像，僅供 Demo 展示。",
    images: [
      { src: "/gallery/work-1.webp", alt: "髮廊環境與造型" },
      { src: "/gallery/work-3.webp", alt: "室內空間" },
      { src: "/gallery/work-5.webp", alt: "捲髮造型" },
      { src: "/gallery/work-11.webp", alt: "造型分享" },
      { src: "/gallery/work-4.webp", alt: "髮型設計" },
      { src: "/gallery/work-2.webp", alt: "染髮成果" },
    ],
  },

  trust: {
    title: "為什麼選這裡",
    lead: "不捏造評價星等；以下為公開資訊與可驗證的到店理由。",
    items: [
      {
        title: "公開評價可自查",
        body: "可在 Google Maps、Instagram 等公開平台查看真實顧客留言，本 Demo 不嵌入假評價文案。",
      },
      {
        title: "巷弄裡的穩定據點",
        body: "鄰近捷運中山站，十餘年在地經營的公開敘述，適合想找固定設計師的客人。",
      },
      {
        title: "空間與氛圍",
        body: "工業風、木質、植栽造景——公開照片裡常被提到的 chill 沙龍感。",
      },
    ],
    ctaNote: "想先看風格？追蹤 IG 或加 LINE 傳參考圖。",
  },

  booking: {
    title: "如何預約",
    steps: [
      {
        num: "01",
        title: "LINE 或來電",
        body: "告知想做的項目、偏好時段與是否攜帶寵物。",
      },
      {
        num: "02",
        title: "確認方向",
        body: "與設計師溝通髮型、髮色與預算範圍，避免到店才臨時決策。",
      },
      {
        num: "03",
        title: "到店體驗",
        body: "享受剪染燙護流程；時段以店家當日回覆為準。",
      },
    ],
  },

  faq: {
    title: "常見問題",
    items: [
      {
        q: "週二是否公休？",
        a: "依目前公開資訊為每週二公休；國定假日時段可能調整，預約前請以 LINE 或來電確認。",
      },
      {
        q: "可以帶寵物嗎？",
        a: "公開資訊標示為寵物友善，建議預約時先告知，方便店家安排。",
      },
      {
        q: "一定要漂髮才能染冷色嗎？",
        a: "公開文案曾提及可不漂髮的冷色選項；實際仍依現場髮質與設計師評估。",
      },
      {
        q: "這個網站是官方網站嗎？",
        a: "不是。本站為琢奧科技 Demo，僅供展示行銷站能力，非店家委託。",
      },
    ],
  },

  ctaBanner: {
    title: "準備好了就聯絡我們",
    body: "電話或 LINE 擇一即可，IG 適合先看作品風格。",
  },

  priceContext: "本 Demo 行銷站展示標的 NT$36,000（正式客製另議）",
} as const;

export type SiteConfig = typeof site;
