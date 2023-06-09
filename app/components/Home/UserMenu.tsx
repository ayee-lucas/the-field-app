'use client';

import React, { useState, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideBar from './SideBar';

export const UserMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [a, setA] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex items-center">

        <div className={`fixed lg:top-[60px] max-lg:top-0 left-0 w-[240px] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[90%] h-full transition duration-300 lg:border-y border-r border-gray-200 dark:border-zinc-800 
          ${open ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}`}
        >
          <SideBar handler={handleClose} />
        </div>

        <div className="flex">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="flex mr-3 text-sm rounded-full lg:mr-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              className="w-10 h-10 rounded-full"
              width={500}
              height={500}
              alt="user photo"
            />
          </button>
        </div>

        <div
          className={`absolute  border border-gray-200 dark:border-gray-800 top-[60px] lg:right-0 max-lg:hidden m-3 transition-transform text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-black/25 dark:divide-gray-600 
          ${open ? 'translate-x-0' : 'translate-x-52'}`}
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-xs text-gray-900 dark:text-white">
              Username
            </span>
            <span className="block text-xs  text-gray-500 truncate dark:text-gray-400">
              email@gmail.com
            </span>
          </div>
          <ul className="py-2">
            <li>
              <Link
                href="/Home"
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Notifications
              </Link>
            </li>
            {a ? (
              <li>
                <button
                  type="button"
                  onClick={() => setA(!a)}
                  className="w-full text-left block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Light Theme
                </button>
              </li>
            ) : (
              <li>
                <button
                  type="button"
                  onClick={() => setA(!a)}
                  className="w-full text-left block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dark Theme
                </button>
              </li>
            )}
            <li>
              <Link
                href="/Home"
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default UserMenu;
