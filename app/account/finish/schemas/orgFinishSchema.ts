import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const orgFinishSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(15, 'Name must be less than 15 characters')
    .trim(),
  bio: z
    .string()
    .min(1, 'Bio is required')
    .max(160, 'Bio must be less than 160 characters')
    .trim(),
  email: z.string().email().trim(),
  country: z.string().min(1, 'Country is required').trim(),
  city: z.string().min(1, 'You have to provide a city').trim(),
  website: z.optional(z.string().min(1, 'This website is too short').trim()),
  sport: z.array(
    z.string().min(1, 'You have to provide at least 1 sport').trim()
  ),
  sponsors: z.optional(z.array(z.string())),
});

export const OrgFormResolver = zodResolver(orgFinishSchema);

export type OrgTypeFSchema = z.infer<typeof orgFinishSchema>;
