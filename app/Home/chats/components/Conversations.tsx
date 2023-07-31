'use client';

import CustomAvatar from '@/components/ui/custom-avatar';
import Link from 'next/link';

type Props = {
  name: string;
  username: string;
  image: string;
};

export default function Conversations({ name, username, image }: Props) {
  return (
    <div className="flex mt-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
      <div className="flex items-center w-28">
        <Link
          className="w-full flex items-center justify-center"
          href={`/Home/profile/${username}`}
        >
          <CustomAvatar size={10} imgUrl={image} />
        </Link>
      </div>
      <Link href={`/Home/chats/${username}`} className="flex w-full h-24 p-3">
        <div className="w-full">
          <div className="flex h-10">
            <p className="text-lg flex items-center text-gray-600 dark:text-gray-200 font-medium">
              {name}
            </p>
            <p className="text-xs flex items-center pt-1 pl-2 text-gray-400 dark:text-gray-400">
              @{username}
            </p>
          </div>
          <div className="flex items-start text-sm text-gray-400 pl-5 dark:text-gray-500">
            Last Message
          </div>
        </div>
      </Link>
    </div>
  );
}
