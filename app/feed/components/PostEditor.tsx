/* eslint-disable react/jsx-props-no-spreading */
import { montserrat, inter } from '@/app/fonts';
import { useClickOutside } from '@/app/hooks/clickOutside';
import { Button } from '@/components/ui/button';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useContext } from 'react';
import { NEWPOST_CONTEXT_ERROR } from '@/app/config';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

import {
  NewPostFormSChema,
  NewPostResolver,
} from '@/resolvers/newPostResolver';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Label } from '@/components/ui/label';
import { createNewPost } from '@/app/server-actions/posts/actions';
import { NewPostContext } from './NewPostHandler';

import 'animate.css';

export default function PostEditor() {
  const context = useContext(NewPostContext);

  if (!context) {
    throw new Error(NEWPOST_CONTEXT_ERROR);
  }

  const { setToggleEditor } = context;

  useLockBodyScroll();

  const node = useClickOutside(() => setToggleEditor(false));

  const form = useForm<NewPostFormSChema>({
    resolver: NewPostResolver,
  });

  const onSubmit = async (data: NewPostFormSChema) => {
    const res = await createNewPost(data);

    if ('error' in res) {
      throw new Error(res.error);
    }

    console.log(res);
  };

  return (
    <div
      className={`fixed flex flex-col justify-end inset-0 bg-black/40 z-[999] ${inter.variable}`}
    >
      <div
        ref={node}
        className="bg-black/80 h-[90%] flex flex-col gap-4 px-2 backdrop-blur backdrop-saturate-150 w-full animate__animated animate__fadeIn animate__faster"
      >
        <header
          className={`w-full p-3 text-xl font-semibold flex justify-between items-center ${montserrat.className}`}
        >
          <h1>Create Post</h1>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <Label className="font-inter text-xl font-semibold">
                    <span className="text-fieldGreen">What's</span> on your
                    mind?
                  </Label>
                  <FormControl>
                    <Textarea
                      placeholder="Type here"
                      className="first-line:text-xl first-line:font-bold resize-none placeholder:text-lg h-44 font-inter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="outline"
              className="absolute top-0 right-2"
            >
              POST
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
