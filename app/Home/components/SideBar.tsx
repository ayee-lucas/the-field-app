'use client';

import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineComment,
} from 'react-icons/ai';

import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useClickOutside } from '@/app/hooks/clickOutside';
import { OuterLClientContext } from './OuterLayoutClient';
import DarkModeDropdown from './DarkModeDropdown';

export default function SideBar() {
  const context = useContext(OuterLClientContext);

  if (!context) {
    throw new Error('OuterLClientContext must be used within <OuterLClientContext.Provider>');
  }

  const { session, open, setOpen } = context;

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = prevScrollPos > currentScrollPos
      || prevScrollPos < currentScrollPos;
      setOpen(!scrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpen]);

  const domNode = useClickOutside(() => setOpen(false));

  return (
    <div
      className={`fixed h-screen w-[80%] px-1 pt-5 transition-all
    bg-white/80 dark:bg-black dark:max-sm:bg-black/60 max-sm:backdrop-saturate-200
      max-sm:backdrop-blur-3xl ${open ? 'translate-x-0' : '-translate-x-full'} z-[999]`}
      ref={domNode}

    >
      <div className="flex justify-between lg:hidden p-2 dark:text-white">
        <div className="flex font-medium text-sm max-sm:text-xs">
          <button
            type="button"
            className=" rounded-full lg:mr-0 pl-4"
          >
            {!session?.user
              ? (
                null
              )
              : (
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  className="w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full"
                  width={56}
                  height={56}
                  alt="user photo"
                />
              )}

          </button>

          { !session?.user
            ? (
              null
            )
            : (
              <div className="ml-3 text-left text-md">
                <p>{session?.user?.username}</p>
                <p>{session?.user?.email}</p>
              </div>
            )}

        </div>
        <button type="button" className="p-2 text-2xl px-4">
          <AiOutlineClose onClick={() => setOpen(false)} />
        </button>
      </div>

      <div className="flex justify-center">
        <div className="my-4 w-[90%] border-t border-gray-200 dark:border-zinc-700 lg:hidden" />
      </div>

      { session?.user
        ? (
          <ul className="space-y-2 mx-5 font-medium">
            <li>
              <Link
                href={`/Home/profile/${session?.user?.username}`}
                onClick={() => setOpen(false)}
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

        )

        : (

          <div className="w-full h-full grid place-items-center">
            <Link
              type="button"
              className="dark:bg-white rounded-xl py-1 px-5"
              href="/test/account/signin"
            >
              Sign in
            </Link>
          </div>

        )}
      <div className="flex justify-center">
        <div className="my-4 w-[90%] border-t border-gray-200 dark:border-zinc-700 lg:hidden" />
      </div>

      <DarkModeDropdown />
    </div>
  );
}
