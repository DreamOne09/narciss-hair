# 審核 URL 鎖定（Orion）

鎖定審核網址：

`https://temporary-racing-orion-h5av1xs.vercel.app`

## 禁止事項

- **不要**執行 `rm -rf .vercel`（會遺失匿名專案憑證，並可能產生新的 `temporary-*.vercel.app`）。
- **不要**在未還原 Orion 的 `.vercel/anonymous.json` 前執行 `vercel deploy --temporary`（會建立新匿名專案）。

## 就地更新（有 Orion 憑證時）

```bash
# 將 Orion 的 projectId + token 寫入 .vercel/anonymous.json 後：
./scripts/deploy-review.sh
```

部署腳本會自動備份 `anonymous.json` 到本目錄。

## 憑證遺失時

Orion 首次部署時的完整 CLI 輸出含 `projectId` 與 `token`（勿用 `grep` 過濾）。若僅有 claim 連結，請至 Vercel 認領後改用帳號 token 部署。

`anonymous.json` 與 `*.bak` 含敏感 token，已列入 `.gitignore`，勿提交至 Git。
