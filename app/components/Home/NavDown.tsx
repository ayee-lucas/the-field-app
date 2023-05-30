import Link from 'next/link';
import React from 'react';
import {
  AiOutlineHome, AiOutlineBell, AiOutlineComment, AiOutlineStar,
} from 'react-icons/ai';

export const NavDown = () => (
  <div className="fixed bottom-0 w-full h-[50px] text-lg z-50">
    <div className="border-t border-gray-200 dark:border-gray-800 flex justify-evenly text-center h-full px-3 py-4 bg-gray-50 dark:bg-black dark:text-white lg:hidden">
      <Link href="/Home">
        <AiOutlineHome />
      </Link>
      <Link href="/Home">
        <AiOutlineComment />
      </Link>
      <Link href="/Home">
        <AiOutlineBell />
      </Link>
      <Link href="/Home">
        <AiOutlineStar />
      </Link>
    </div>
  </div>
);

export default NavDown;
