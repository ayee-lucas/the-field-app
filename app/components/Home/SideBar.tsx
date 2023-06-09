'use client';

import React, { useState, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsMoon, BsSun } from 'react-icons/bs';
import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineComment,
} from 'react-icons/ai';
// import { useClickOutside } from '@/app/hooks/clickOutside';

interface Props {
  handler: () => void
}

export const SideBar: FC<Props> = ({ handler }) => {
  const [a, setA] = useState(true);

  /*   const domNode = React.useRef<HTMLDivElement>(null);

  useClickOutside({ handler, domNode }); */

  return (
    <div
      className="h-full px-1 pt-5 bg-white/60 dark:bg-black dark:max-sm:bg-black/60 max-sm:backdrop-saturate-200 max-sm:backdrop-blur-3xl"
    >
      <div className="flex justify-between lg:hidden p-2 dark:text-white">
        <div className="flex font-medium text-sm max-sm:text-xs">
          <button
            type="button"
            className=" rounded-full lg:mr-0 pl-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              className="w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full"
              width={56}
              height={56}
              alt="user photo"
            />
          </button>

          <div className="ml-3 text-left text-md">
            <p>username</p>
            <p>email@gmail.com</p>
          </div>

        </div>
        <button type="button" className="p-2 text-2xl px-4">
          <AiOutlineClose onClick={handler} />
        </button>
      </div>

      <div className="flex justify-center">
        <div className="my-4 w-[90%] border-t border-gray-200 dark:border-zinc-700 lg:hidden" />
      </div>

      <ul className="space-y-2 mx-5 font-medium">
        <li>
          <Link
            href="/Home"
            className="flex p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
          >
            <AiOutlineUser className="w-6 h-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/Home"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 max-lg:hidden"
          >
            <AiOutlineComment className="w-6 h-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">Chats</span>
          </Link>
        </li>
        <li>
          <Link
            href="/Home"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 max-lg:hidden"
          >
            <AiOutlineStar className="w-6 h-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">Starred</span>
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <AiOutlineSetting className="w-6 h-6" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              Settings
            </span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul id="dropdown-example" className="hidden py-2 space-y-2">
            <li>
              <Link
                href="/Home"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/Home"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Billing
              </Link>
            </li>
            <li>
              <Link
                href="/Home"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Invoice
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className="flex justify-center">
        <div className="my-4 w-[90%] border-t border-gray-200 dark:border-zinc-700 lg:hidden" />
      </div>

      <div className="absolute bottom-0 p-6">
        <div className="flex justify-center">
          <div className="my-4 w-[90%] border-t border-gray-200 dark:border-zinc-700 lg:hidden" />
        </div>

        {a ? (
          <button
            type="button"
            onClick={() => setA(false)}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <BsMoon className="w-5 h-5" />
            <span className="flex-1 ml-3 whitespace-nowrap">Dark Theme</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setA(true)}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <BsSun className="w-5 h-5" />
            <span className="flex-1 ml-3 whitespace-nowrap">Light Theme</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
