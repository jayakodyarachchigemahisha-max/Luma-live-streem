# LumaLive

Standalone Tongoo-like creator monetization MVP. This repository is intentionally separate from `supunsasmithafamily-ai/Velantin-express` and has no GitHub remote.

## Architecture

- **Mobile:** Expo React Native + TypeScript. `apps/mobile` contains the native-ready app and `app.json` config plugin settings for camera, microphone, audio background mode, notifications, deep links, Android permissions, and iOS bundle identifier.
- **API:** Express + Prisma + PostgreSQL. All wallet mutations require an authenticated Firebase identity header in the MVP and use a unique idempotency key inside a database transaction.
- **Provider adapters:** Firebase Auth/FCM/APNs, LiveKit, Stripe/OxaPay are configuration points, never fake success paths.

## Run

1. `cp .env.example .env` and fill provider values; never commit secrets.
2. `pnpm install`
3. `pnpm --filter @lumalive/api prisma:generate`
4. `pnpm --filter @lumalive/api prisma:migrate`
5. `pnpm typecheck && pnpm test`
6. `pnpm --filter @lumalive/mobile start`
7. For native folders: `pnpm prebuild:native` (requires Expo CLI; Android SDK/Gradle or Xcode are needed to compile).

## Current MVP scope

Implemented: discovery/trending search UI, Sinhala/Tamil/English UI labels, camera + microphone permission flow, live preview shell, API health/discovery/creator room creation, Prisma models for users/creator profiles/rooms/follows/gifts/ledger/subscriptions/referrals/watch history, server-side role check, atomic idempotent gift debit, secure-store-ready session integration point, and deep-link scheme.

The next provider-backed slices are explicitly gated by setup: Firebase Auth token verification, LiveKit token/room webhooks, real-time chat (WebSocket or provider data channel), Stripe/OxaPay webhook reconciliation, FCM/APNs device registration, replay/clip storage, and analytics rollups.
