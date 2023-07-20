/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useForm } from 'react-hook-form';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import ReactLoading from 'react-loading';
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import { AccFinishTypeFSchema, AccFinishResolver } from '../schemas/accFTypeSchema';
import { finishUser } from '../actions';

export default function AccountFinishForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const form = useForm<AccFinishTypeFSchema>({
    resolver: AccFinishResolver,
    defaultValues: {
      bio: '',
      name: '',
    },
  });

  const onSubmit = async (values: AccFinishTypeFSchema) => {
    setLoading(true);
    const res = await finishUser(userId, values);
    if (res.error) return setError(true);
    setLoading(false);
    return router.replace('/Home');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        {/** Name  */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/** Bio  */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="name">Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a short bio about yourself"
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full hover:bg-fieldGreen"
        >
          Save
        </Button>

      </form>
      {loading && (
        <div className="absolute inset-0 grid place-content-center z-50 bg-black/60 backdrop-blur-sm">
            {error ? (
              <div className="w-full flex flex-col justify-center items-center">
                <RxCross2 className="text-red-500 text-4xl" />
                <span>
                  Something went wrong. Please try again.
                </span>
              </div>
            ) : (
              <ReactLoading type="spin" color="#ffffff" height="40px" width="40px" className="pt-10" />
            )}
        </div>
      )}
    </Form>

  );
}
