"use client";
import React, { useState } from "react";
import Image from "next/image";

export const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center" >
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
          className={`absolute top-[60px] lg:right-0 max-lg:hidden m-3 transition-transform text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-black dark:divide-gray-600 ${
            open ? "translate-x-0" : "translate-x-52"
          }`}
          id="user-dropdown"
        >
          <div className="px-6 py-3">
            <span className="block text-xs text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-xs  text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
