/* eslint-disable react/jsx-props-no-spreading */
import { montserrat, inter } from '@/app/fonts';
import { useClickOutside } from '@/app/hooks/clickOutside';
import { Button } from '@/components/ui/button';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useContext, useTransition } from 'react';
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

import { useToast } from '@/components/ui/use-toast';
import { NewPostContext } from './NewPostHandler';

import 'animate.css';

export default function PostEditor() {
  const context = useContext(NewPostContext);

  if (!context) {
    throw new Error(NEWPOST_CONTEXT_ERROR);
  }

  const { setToggleEditor, setLoading, setProgress } = context;

  useLockBodyScroll();

  const node = useClickOutside(() => setToggleEditor(false));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();

  const form = useForm<NewPostFormSChema>({
    resolver: NewPostResolver,
  });

  const onSubmit = async (data: NewPostFormSChema) => {
    setToggleEditor(false);
    setLoading(true);
    setProgress(50);

    startTransition(async () => {
      const res = await createNewPost(data);

      if ('error' in res) {
        toast({
          title: 'Error',
          description: res.message,
          variant: 'destructive',
        });
        setProgress(0);
        setLoading(false);
      }

      setProgress(100);

      setTimeout(() => {
        setLoading(false);
      }, 1000);

      toast({
        title: 'Post Uploaded',
        description: 'Your Post have been uploaded',
      });
    });
  };

  return (
    <div
      className={`fixed flex flex-col justify-end inset-0 bg-black/40 z-[999] ${inter.variable}`}
    >
      <div
        ref={node}
        className="bg-black/80 h-[90%] flex flex-col gap-4 p-4 backdrop-blur backdrop-saturate-150 w-full animate__animated animate__fadeIn animate__faster"
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
              className="absolute top-2 right-2"
            >
              POST
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
