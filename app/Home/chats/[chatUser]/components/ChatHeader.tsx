'use client';

import CustomAvatar from '@/components/ui/custom-avatar';
import Link from 'next/link';
import { MdArrowBackIos } from 'react-icons/md';

type Props = {
  name: string,
  username: string,
  image: string,
  online: boolean
};

export default function ChatHeader({
  name, username, image, online,
}:Props) {
  return (
    <div className="max-md:absolute top-0 w-full z-[999] text-lg min-h-[60px] max-h-[60px] bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-700">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center w-32 md:w-20 ml-1 h-[60px]">
            <Link className="md:hidden" href="/Home/chats">
              <MdArrowBackIos className="text-xl flex text-right mx-2" />
            </Link>
            <Link
              className="w-full flex items-center justify-center"
              href={`/Home/profile/${username}`}
            >
              <CustomAvatar size={10} imgUrl={image} />
            </Link>
          </div>
          <div className="flex w-full h-[60px] p-2">
            <div className="w-full">
              <div className="flex">
                <p className="text-xl flex items-end text-gray-700 dark:text-white font-semibold">{name}</p>
                <p className="text-sm flex items-end  pl-3 text-gray-400 dark:text-gray-400">
                  @
                  {username}
                </p>
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {online ? 'Online' : 'Offline' }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
