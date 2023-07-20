import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const accFinishSchema = z.object({
  name: z.string().min(1, 'Name is required').max(15, 'Name must be less than 15 characters').trim(),
  bio: z.string().min(1, 'Bio is required').max(160, 'Bio must be less than 160 characters').trim(),
});

export const AccFinishResolver = zodResolver(accFinishSchema);

export type AccFinishTypeFSchema = z.infer<typeof accFinishSchema>;
