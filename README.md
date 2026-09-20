# NARCISS HAIR — 靜態行銷 Demo（Astro-Chalet 家）

台北中山區 **NARCISS HAIR** 的美業行銷站 Demo。**純靜態** `astro build`，無資料庫、無 CMS。

> **僅供 Demo 使用** · 公開來源整理 · **非店家委託** · **由琢奧科技製作**

## 官方 alias（G5 交付）

`https://narciss-hair.vercel.app`

```bash
export VERCEL_TOKEN=your_token
./scripts/deploy-official.sh
```

禁止以 anonymous `temporary-*.vercel.app` 當正式交付。

## 改文案：只改一個檔

```text
src/config/site.ts
```

（Astro-Chalet 哲學：元件不寫死文案，全部讀 `SITE`。）

## 本地

```bash
npm install
npm run dev      # http://localhost:43123
npm run build    # → dist/
npm run verify:g5
```

## 區塊

Hero（editorial 雙 CTA）· 服務（圖文交替，非四欄卡）· 關於 · Gallery · 信任（不造假評價）· CTA · FAQ · 時段地址 · 聯絡

## Demo 進站窗

置中 overlay；未按「看 Demo」鎖 `html` / `body` / `#site-shell` 捲動，背後 CTA 不可點。

## 技術

- Astro 6 + `@astrojs/sitemap`
- HairSalon JSON-LD + FAQ JSON-LD
- CSS scroll reveal（無 GSAP／無 WebGL）
