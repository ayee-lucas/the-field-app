'use client';

import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GetUser } from '../../actions/actions';

type Props = {
  session: string;
};

export default function Header({ session }: Props) {
  const [search, setSearch] = useState('');

  const router = useRouter();

  async function newChat(newUserChat: string) {
    const user = await GetUser(newUserChat);

    const userData = user.data;

    const data = {
      username: userData.username,
      name: userData.name,
      image: userData.picture.pictureURL,
      sessionUser: session,
    };

    console.log({ DATA: data });

    const res = await fetch('/api/Chats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    console.log({ RES: res });
    router.refresh();
  }

  return (
    <>
      <div className="relative mt-4 rounded-lg px-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-xl py-1.5 pr-3 pl-10 focus:border-gray-400 dark:focus:border-gray-700 focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 pl-6 px-3 flex items-center">
          <FiSearch className="text-gray-600 dark:text-gray-300" size={15} />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="md:w-96 w-full text-black font-semibold dark:text-gray-300 px-4 pt-4 pb-1">
          Chats
        </div>
        <div className="w-full text-end text-black font-semibold dark:text-gray-300 px-4 pt-4 pb-1">
          <div className="flex items-center justify-end text-end">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                newChat(search);
              }}
              className="flex h-full"
            >
              New Chat
              <AiOutlinePlus className="flex mx-3 justify-end h-full text-lg dark:text-white items-center" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
