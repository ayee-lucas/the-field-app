'use client';

import React, { useState } from 'react';

function NavProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <nav
      className="w-full relative h-full mt-2
    after:content-[''] after:w-full after:h-1 after:bg-fieldGreen after:absolute after:bottom-0 after:left-0 cursor-pointer
    "
    >
      <ul className=" flex justify-start text-black items-center bg-gray-100 dark:bg-black dark:text-white max-sm:text-[13px]
      px-7 max-sm:px-2 py-6 gap-4 font-medium overflow-x-auto"
      >
        <li className="max-sm:hidden">Recent 🕑</li>

        <li className="max-sm:hidden">Posts 📈</li>

        <li className="max-sm:hidden">Starred ⭐️</li>

        <li className="max-sm:hidden">Comments 📢</li>

        <li className="max-sm:hidden">Likes ❤️</li>

        <li
          className={`flex items-center justify-center gap-3 border ${selectedIndex === 0 && 'border-fieldGreen text-fieldGreen'} rounded-xl p-2`}
          onClick={() => setSelectedIndex(0)}
          aria-hidden
        >
          <span>
            Recent
          </span>
          <span>
            🕑
          </span>
        </li>
        <li
          className={`flex items-center justify-center gap-3 border ${selectedIndex === 1 && 'border-fieldGreen text-fieldGreen'} rounded-xl p-2`}
          onClick={() => setSelectedIndex(1)}
          aria-hidden
        >
          <span>
            Posts
          </span>
          <span>
            📈
          </span>
        </li>
        <li
          className={`flex items-center justify-center gap-3 border ${selectedIndex === 2 && 'border-fieldGreen text-fieldGreen'} rounded-xl p-2`}
          onClick={() => setSelectedIndex(2)}
          aria-hidden
        >
          <span>
            Starred
          </span>
          <span>
            ⭐️
          </span>
        </li>
        <li
          className={`flex items-center justify-center gap-3 border ${selectedIndex === 3 && 'border-fieldGreen text-fieldGreen'} rounded-xl p-2`}
          onClick={() => setSelectedIndex(3)}
          aria-hidden
        >
          <span>
            Comments
          </span>
          <span>
            📢
          </span>
        </li>
        <li
          className={`flex items-center justify-center gap-3 border ${selectedIndex === 4 && 'border-fieldGreen text-fieldGreen'} rounded-xl p-2`}
          onClick={() => setSelectedIndex(4)}
          aria-hidden
        >
          <span>
            Likes
          </span>
          <span>
            ❤️
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default NavProfile;
