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
  sponsors: z.optional(z.array(z.string().trim())),
  current_team: z.optional(z.string().trim()),
  height: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Your height must be a number, and must be in cm',
    })
    .refine(
      (val) => {
        const heightNum = parseInt(val, 10);
        return heightNum > 100 && heightNum < 200;
      },
      {
        message: 'Your height must be between 100 and 200 cm',
      }
    ),

  weight: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Your weight must be a number, and must be in lbs',
    })
    .refine(
      (val) => {
        const weightNum = parseInt(val, 10);
        return weightNum > 100 && weightNum < 400;
      },
      {
        message: 'Your weight must be between 100 and 400 lbs',
      }
    ),
  achievements: z.optional(z.string().trim()),
  contact: z.string().email(),
});

export const AthlFinishResolver = zodResolver(athlFinishSchema);

export type AthlFinishTypeFSchema = z.infer<typeof athlFinishSchema>;
