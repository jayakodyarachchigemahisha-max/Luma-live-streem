import { describe, it, expect } from 'vitest';
import { GiftRequest, ReferralClaim } from '../../../packages/shared/src/index.js';
describe('validated mutation contracts', () => { it('rejects invalid gift quantities', () => expect(GiftRequest.safeParse({ roomId: 'x', giftId: 'x', quantity: 0 }).success).toBe(false)); it('accepts referral codes', () => expect(ReferralClaim.parse({ code: 'WELCOME24' }).code).toBe('WELCOME24')); });
