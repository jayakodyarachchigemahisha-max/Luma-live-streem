import { z } from 'zod';
export const SupportedLocale = z.enum(['en','si','ta']);
export const GiftRequest = z.object({roomId:z.string().uuid(), giftId:z.string().uuid(), quantity:z.number().int().positive().max(100)});
export const ReferralClaim = z.object({code:z.string().min(4).max(32)});
export type Locale = z.infer<typeof SupportedLocale>;
export type LiveRoomSummary = {id:string; title:string; creatorName:string; viewerCount:number; category:string; thumbnailUrl?:string};
