import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const athlFinishSchema = z.object({
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
  nationality: z.string().min(1, 'Nationality is required'),
  gender: z
    .string()
    .min(1, 'Gender is required')
    .max(10, 'Gender is not valid'),
  sport: z.string().min(1, 'You have to provide at least 1 sport'),
  current_team: z.string(),
  height: z.string().min(1, 'You have to provide your height'),
  weight: z.string().min(1, 'You have to provide your weight'),
  achievements: z.string().min(1, 'You have to provide your weight'),
  contact: z.string().min(1, 'Provide at least 1 email'),
  links: z.optional(z.string()),
});

export const AthlFinishResolver = zodResolver(athlFinishSchema);

export type AthlFinishTypeFSchema = z.infer<typeof athlFinishSchema>;
