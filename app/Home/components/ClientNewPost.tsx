'use client';

import React, { useState, createContext, useMemo } from 'react';
import { Session } from '@/app/types/sessionType';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useUploadThing } from '@/app/tools/uploadthing';
import NewPost from '../profile/[user]/components/NewPost';
import ModalPost from '../post/components/ModalPost';
import PostingComponent from './PostingComponent';
import { createPostGo } from '../post/actions';

type Props = {
  session: Session;
};

type ContextType = {
  startUpload: (
    files: File[],
    input?: undefined
  ) => Promise<
    | {
      fileUrl: string;
      fileKey: string;
    }[]
    | undefined
  >;
  handleModal: () => void;
  session: Session;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setAreaText: React.Dispatch<React.SetStateAction<string>>;
  dropImages: File[];
  setDropImages: React.Dispatch<React.SetStateAction<File[]>>;
};

export const ClientNewPostContext = createContext<ContextType | null>(null);

export default function ClientNewPost({ session }: Props) {
  const router = useRouter();

  const { toast } = useToast();

  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<boolean>(false);
  const [postLoading, setPostLoading] = useState<boolean>(false);
  const [areaText, setAreaText] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [dropImages, setDropImages] = useState<File[]>([]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (areaText.length < 1 || areaText === '') {
      return toast({
        title: 'Hey',
        description: 'Please write something',
      });
    }

    // Changes 'Create new post' to 'Posting...'
    setNewPost(true);

    // Set uploading loading state
    setPostLoading(true);

    if (!session?.user?.sub) {
      return router.push('/test/account/signin');
    }

    const post = await createPostGo(session?.user?.sub, areaText);

    if (post.error) {
      setPostLoading(false);
      setError(true);
      setModalOpen(false);
      return toast({
        title: post.message,
        description: post.error as string,
        variant: 'destructive',
        action: (
          <ToastAction onClick={() => setModalOpen(true)} altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }

    setTimeout(() => {
      setPostLoading(false);
    }, 1000);
    setModalOpen(false);
    return router.refresh();
  };

  const { startUpload } = useUploadThing('imageUploader', {
    onClientUploadComplete: () => {
      alert('uploaded successfully!');
    },
    onUploadError: () => {
      alert('error occurred while uploading');
    },
  });

  const handleModal = () => {
    if (!session?.user) return router.push('/test/account/signin');
    return setModalOpen(!modalOpen);
  };

  const values = useMemo(
    () => ({
      startUpload,
      handleModal,
      session,
      handleSubmit,
      setAreaText,
      dropImages,
      setDropImages,
    }),
    [
      startUpload,
      handleModal,
      session,
      handleSubmit,
      setAreaText,
      dropImages,
      setDropImages,
    ]
  );

  return (
    <>
      {newPost ? (
        <PostingComponent loading={postLoading} error={error} />
      ) : (
        <NewPost onClick={handleModal} />
      )}

      {modalOpen && session?.user && (
        <ClientNewPostContext.Provider value={values}>
          <ModalPost />
        </ClientNewPostContext.Provider>
      )}
    </>
  );
}
