import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newPostFormSchema = z.object({
  text: z.string().min(1, 'You cannot make an empty post').trim(),
});

export const NewPostResolver = zodResolver(newPostFormSchema);

export type NewPostFormSChema = z.infer<typeof newPostFormSchema>;
