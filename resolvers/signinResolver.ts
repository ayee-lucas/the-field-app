import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signInFSchema = z.object({
  username: z
    .string()
    .min(3, 'Username is required')
    .max(14, 'This username is too long'),
  password: z.string().min(3, 'Password is required'),
});

export const SignInFResolver = zodResolver(signInFSchema);

export type SignInTypeFSchema = z.infer<typeof signInFSchema>;
