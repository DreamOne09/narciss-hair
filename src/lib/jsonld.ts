import { site } from "../config/site";

export function buildLocalBusinessJsonLd() {
  const b = site.business;
  return {
    "@context": "https://schema.org",
    "@type": site.schemaType,
    name: b.name,
    alternateName: b.nameAlt,
    description: site.seo.description,
    url: site.url,
    image: `${site.url}${site.seo.ogImage}`,
    telephone: b.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "中山北路二段16巷16號",
      addressLocality: b.addressLocality,
      addressRegion: "台北市",
      postalCode: b.postalCode,
      addressCountry: "TW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: b.geo.latitude,
      longitude: b.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
        opens: "11:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:00",
        closes: "19:00",
      },
    ],
    sameAs: [b.instagram, b.line],
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
