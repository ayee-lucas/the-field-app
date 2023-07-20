/* eslint-disable react/jsx-props-no-spreading */

'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { SignInFResolver, SignInTypeFSchema } from './signInTypeFSchema';
import goSignIn from '../actions';

export default function SignInForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<SignInTypeFSchema>({
    resolver: SignInFResolver,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: SignInTypeFSchema) {
    setLoading(true);
    const res = await goSignIn(values);
    if (res.error) {
      if (res.error === 'Fetch failed') {
        setError('Server Error');
      } else {
        setError(res.message);
        setLoading(false);
      }
    } else {
      router.push('/Home');
      router.refresh();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        {/** Username Form Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="username" className={`text-xs font-normal ${error ? 'text-red-500' : ''}`}>Username</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/** Password Form Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="password" className={`text-xs font-normal ${error ? 'text-red-500' : ''}`}>Password</FormLabel>
              <FormControl>
                <Input disabled={loading} type="password" placeholder="Enter your password" className={`${error ? 'border-red-500 focus:outline-none focus:ring-red-500' : ''}`} {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {error !== '' && (<FormMessage className="text-xs">{error === 'Server Error' ? 'Something went wrong' : error }</FormMessage>)}

        {loading ? (

          <Button
            type="submit"
            disabled={loading}
            className="w-full hover:bg-fieldGreen"
          >
            <div className="text-black text-3xl w-full flex items-center justify-center animate-bounce">
              .
            </div>
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={loading}
            className="w-full hover:bg-fieldGreen"
          >
            Sign in
          </Button>
        )}

      </form>
    </Form>
  );
}
