# NARCISS HAIR — Demo 網站

高質感美髮沙龍 Demo 網站，展示 NARCISS HAIR（台北中山區）的品牌形象與預約導流能力。

> **本站僅供 Demo**，資料來自 Google Maps／粉專等公開來源，**非店家委託**。
> Demo 製作：琢奧 · 顧問 Dream

## 店家資訊

| 項目 | 內容 |
|------|------|
| 名稱 | NARCISS HAIR |
| 地址 | 台北市中山區中山北路二段16巷16號 |
| 電話 | 02-2563-6233 |
| Instagram | https://www.instagram.com/narciss.hair/ |
| LINE | https://lin.ee/Bc0WDRi |

## 部署（官方 Vercel alias）

目標網址：`https://narciss-hair.vercel.app`

需要具 deploy / alias 權限的 `VERCEL_TOKEN`（於 [Vercel Account Tokens](https://vercel.com/account/tokens) 建立）。

```bash
export VERCEL_TOKEN=your_token
./scripts/deploy-official.sh
```

**禁止**使用 `vercel deploy --temporary` 或匿名 `temporary-*.vercel.app` 部署。

## 本地開發

```bash
npm install
npm run dev
```

開啟 http://localhost:43123

## 建置

```bash
npm run build
npm start
```

## 技術棧

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## 功能亮點

- 首訪全屏 Demo 彈窗（標示「僅供 Demo 使用」、三層捲動鎖定）
- 首屏四鍵聯絡：電話 / FB / LINE / IG
- 公開照片作品廊
- 寵物友善空間說明
- LINE 預約導流與 Google Maps 嵌入
