'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useClickOutside } from '@mantine/hooks';
import { RxCross2 } from 'react-icons/rx';
import { Button } from '@/components/ui/button';
import { useContext, useEffect, useState } from 'react';
import CustomAvatar from '@/components/ui/custom-avatar';
import { BiSolidVideos } from 'react-icons/bi';
import Image from 'next/image';
import TextArea from './TextArea';
import { MultiUploader } from './ImageUploadPost';
import { ClientNewPostContext } from '../../components/ClientNewPost';

export default function ModalPost() {
  const context = useContext(ClientNewPostContext);

  if (!context) {
    throw new Error(
      'ClientNewPostContext must be used within <OuterLClientContext.Provider>'
    );
  }

  const { handleModal, session, handleSubmit, setAreaText, dropImages } =
    context;

  useLockBodyScroll();

  const domNode = useClickOutside(() => handleModal());

  const [translateY, setTranslateY] = useState<string>('translate-y-full');

  useEffect(() => {
    setTimeout(() => {
      setTranslateY('translate-y-0');
    }, 300);
  }, []);

  return (
    <div
      ref={domNode}
      className={`fixed inset-0 top-24 px-2 bg-white dark:bg-black z-[1000] shadow-[0_0_0_100vmax] shadow-black/75 transition-all ${translateY}`}
    >
      {/** Header */}
      <div className="flex items-center justify-center w-full relative">
        <h1 className="text-2xl font-bold py-2">Create a new Post</h1>

        <RxCross2
          onClick={() => handleModal()}
          role="button"
          className="text-gray-600 text-2xl cursor-pointer absolute top-3 right-1"
        />
      </div>

      {/** User info */}
      <div className="flex items-center justify-between w-full px-3 py-3">
        <div className="flex items-center gap-3">
          <CustomAvatar sessionImage={session} />

          <h1 className="text-lg">@{session?.user?.username}</h1>
        </div>
        <Button onClick={(e) => handleSubmit(e)}>POST</Button>
      </div>

      <TextArea setText={setAreaText} />

      <div>
        {dropImages.map((file, index) => {
          const url = URL.createObjectURL(file);

          if (file) {
            return (
              <Image
                key={index}
                width="40"
                height="40"
                src={url}
                alt={`image ${index}`}
                onLoad={() => {
                  URL.revokeObjectURL(url);
                }}
              />
            );
          }
          return <div>a</div>;
        })}
      </div>

      <div className="w-full h-full flex flex-col ">
        <ul className="w-full p-3 list-none">
          <li className="w-full  border-y border-y-zinc-600 px-6 py-4">
            <MultiUploader />
          </li>
          <li className="w-full gap-3 flex items-center border-y border-y-zinc-600 px-6 py-4">
            <BiSolidVideos />
            Add Video
          </li>
        </ul>
      </div>
    </div>
  );
}
