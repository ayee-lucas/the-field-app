/* eslint-disable react/jsx-props-no-spreading */

'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SignUpFResolver, SignUpTypeFSchema } from './signupTypeFSchema';
import { goSignUp } from '../actions';

export default function SignUpForm() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignUpTypeFSchema>({
    resolver: SignUpFResolver,
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: SignUpTypeFSchema) {
    console.log(values);

    const res = await goSignUp(values);

    console.log(res);

    if (res.error) {
      if (res.message) {
        setError(res.message);
      } else {
        setError('Something went wrong');
      }
    } else {
      router.push('/auth/signin');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        {error !== '' && (<FormMessage className="text-xs">{error}</FormMessage>)}

        {/** Username Form Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username" className="text-xs font-normal">Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter an username" {...field} />
              </FormControl>
              <FormDescription>
                Create an unique username
              </FormDescription>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/** Email Form Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email" className="text-xs font-normal">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter an email" {...field} />
              </FormControl>
              <FormDescription>
                Your email
              </FormDescription>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/** Password Form Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password" className="text-xs font-normal">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter a password" {...field} />
              </FormControl>
              <FormDescription>
                Create a strong password
              </FormDescription>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/** Confirm Password Form Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirm-password" className="text-xs font-normal">Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormDescription>
                Confirm your password
              </FormDescription>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full hover:bg-fieldGreen dark:hover:bg-black dark:hover:text-fieldGreen dark:border dark:border-fieldGreen"
        >
          Sign Up
        </Button>

      </form>

    </Form>

  );
}
