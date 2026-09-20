# NARCISS HAIR — 靜態行銷 Demo（Astro）

台北中山區 **NARCISS HAIR** 的美業行銷站 Demo：大圖 editorial 版型、Local SEO、雙 CTA 轉換動線。**純靜態** `astro build`，無資料庫、無 CMS 後台。

> **僅供 Demo 使用** · 內容整理自 Google Maps、Instagram 等公開來源 · **非店家委託**  
> **由琢奧科技製作**

## 官方網址（目標 alias）

`https://narciss-hair.vercel.app`

（臨時 `*.vercel.app` 部署不算驗收交付；請用下方官方腳本綁定 alias。）

## 改文案：只改一個檔

所有店名、聯絡、時段、服務、FAQ、SEO、圖片路徑都在：

```text
src/config/site.ts
```

改完存檔 → `npm run dev` 預覽 → `npm run build` 建置。

## 本地開發

```bash
npm install
npm run dev
```

瀏覽器開啟 http://localhost:43123

## 建置

```bash
npm run build
npm run preview
```

輸出目錄：`dist/`

## G5 自動檢查（Demo 進站窗 + 375 首屏 CTA）

```bash
npm run preview &
TEST_URL=http://127.0.0.1:43123 node scripts/verify-gate.cjs
```

## 部署（官方 Vercel alias）

需要具 deploy / alias 權限的 `VERCEL_TOKEN`：

```bash
export VERCEL_TOKEN=your_token
./scripts/deploy-official.sh
```

**禁止**使用匿名 temporary 部署當正式交付。

## 技術棧

- [Astro](https://astro.build/) 5（static output）
- Tailwind CSS v4
- `@astrojs/sitemap`（sitemap）
- LocalBusiness + FAQ JSON-LD
- 進站 Demo 置中 overlay（未點「看 Demo」前鎖捲動、CTA 不可點）

## 區塊結構

Hero · 服務（editorial 圖文）· 關於 · Gallery · 信任說明（不捏造評價）· 預約步驟 · 時段／地址／地圖 · FAQ · CTA Banner

## Demo 免責

本 repo 為 **NT$36,000 等級行銷站展示標的** 之 Demo 實作；正式客製、素材改稿、預約／會員系統另議。
