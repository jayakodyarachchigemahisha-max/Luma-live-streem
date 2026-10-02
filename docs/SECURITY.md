# Security rules

- Enforce Firebase ID-token verification on every authenticated API request.
- Use HTTPS, Helmet, strict CORS, rate limits, request size limits, structured audit logs, and secret manager injection.
- Never accept client-supplied role, creator income, coin balance, viewer count, payment state, or referral reward.
- Use PostgreSQL transactions plus unique idempotency keys for wallet, subscription, referral, and webhook mutations.
- Add row-level authorization: creators can mutate only their rooms; viewers can mutate only their own follows/history; admins require separate policy.
- Secure-store access tokens on mobile; never log tokens or payment data. Add device attestation where supported.
- Moderate chat, live content, replay, clips, gifts, and reports; implement block/report/ban, age gate, privacy policy, terms, deletion/export, and data-retention controls.
