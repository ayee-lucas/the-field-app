'use client';

import { Session } from '@/app/types/sessionType';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useClickOutside } from '@mantine/hooks';
import { RxCross2 } from 'react-icons/rx';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import CustomAvatar from '@/components/ui/custom-avatar';
import TextArea from './TextArea';

type Props = {
  handleOpen: () => void;
  submit: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setAreaText: React.Dispatch<React.SetStateAction<string>>;
  session: Session
};

export default function ModalPost({
  handleOpen, session, submit, setAreaText,
}:Props) {
  useLockBodyScroll();

  const domNode = useClickOutside(() => handleOpen());

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
        <h1 className="text-2xl font-bold py-2">
          Create a new Post
        </h1>

        <RxCross2 onClick={() => handleOpen()} role="button" className="text-gray-600 text-2xl cursor-pointer absolute top-3 right-1" />
      </div>

      {/** User info */}
      <div className="flex items-center justify-between w-full px-3 py-3">
        <div className="flex items-center gap-3">
          <CustomAvatar sessionImage={session} />

          <h1 className="text-lg">
            @
            {session?.user?.username}
          </h1>
        </div>
        <Button
          onClick={(e) => submit(e)}
        >
          POST

        </Button>
      </div>

      <TextArea setText={setAreaText} />
    </div>
  );
}
