import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_TC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSerif = Noto_Serif_TC({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "NARCISS HAIR | 中山站美髮沙龍",
  description:
    "NARCISS HAIR 台北中山區髮廊 Demo 網站。鄰近捷運中山站，剪燙染護、寵物友善空間。",
  openGraph: {
    title: "NARCISS HAIR | 中山站美髮沙龍",
    description: "高質感美髮沙龍 · 捷運中山站巷弄",
    images: ["/gallery/work-9.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
