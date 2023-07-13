import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpFSchema = z.object({
  username: z.string().min(4, { message: 'Username must be at least 3 characters long' }).max(20, { message: 'Username must be at most 20 characters long' }).trim(),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).max(20, { message: 'Password must be at most 20 characters long' }),
  confirmPassword: z.string(),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const SignUpFResolver = zodResolver(signUpFSchema);

export type SignUpTypeFSchema = z.infer<typeof signUpFSchema>;
