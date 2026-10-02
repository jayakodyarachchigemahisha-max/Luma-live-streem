# Production setup checklist

## Firebase / FCM / APNs

1. Create a Firebase project and native Android/iOS apps matching `com.example.lumalive`.
2. Enable Email/Password or phone auth. Configure secure-store token persistence on the client.
3. Create a service account for the API and set `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and escaped `FIREBASE_PRIVATE_KEY`; replace the current development identity middleware with Firebase Admin `verifyIdToken` before production.
4. Upload Android `google-services.json` and iOS `GoogleService-Info.plist` only through your secret/build system.
5. Configure FCM Android credentials and APNs key/team/bundle values. Register device tokens server-side and send live-start notifications only after user opt-in.

## Live streaming

Use LiveKit, Agora, or another licensed provider. Set `LIVEKIT_URL`, API key, and secret; issue short-lived server-generated tokens scoped to a room. Persist provider webhooks, verify signatures, and make room-start/end handling idempotent. Do not put provider secrets in the mobile bundle.

## Payments and wallet

Use Stripe Billing/Checkout or OxaPay hosted checkout for coin top-ups and 30-day memberships. Create a pending payment record before redirect. Verify webhook signatures server-side, reconcile by provider event ID, and write a ledger entry exactly once. Never trust client coin balances or payment-success callbacks. Add KYC, tax, age/region rules, refunds, chargebacks, payout holds, and fraud controls before launch.

## Android / iOS signing

Set production `android.package` and `ios.bundleIdentifier` to owned identifiers. Configure EAS or native Gradle/Xcode signing with keystore, Play App Signing, Apple Team ID, certificates, and provisioning profiles in CI secrets. Run `eas build --platform android` and `eas build --platform ios` only after credentials are supplied.
