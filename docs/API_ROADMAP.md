# API roadmap

| Area | Route family | Required production behavior |
|---|---|---|
| Auth/profile | `/v1/me`, `/v1/profiles` | Firebase Admin verification, role and ownership policies |
| Live | `/v1/rooms`, `/v1/rooms/:id/token` | Live provider token issuance, signed webhook reconciliation |
| Chat | `/v1/rooms/:id/messages` + WebSocket | moderation, rate limits, pagination |
| Wallet | `/v1/wallet/*` | hosted checkout + signed webhook, immutable ledger, idempotency |
| Membership | `/v1/creators/:id/subscribe` | 30-day entitlement, provider event reconciliation |
| Referrals | `/v1/referrals/*` | one-time claim, atomic reward ledger, anti-abuse limits |
| Analytics | `/v1/creators/me/analytics` | daily/weekly/monthly rollups from event facts |
| Replay/clips | `/v1/replays`, `/v1/clips` | object storage signed URLs and rights/moderation checks |
