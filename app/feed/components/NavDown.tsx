'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  AiOutlineHome, AiOutlineBell, AiOutlineComment, AiOutlineStar,
} from 'react-icons/ai';

export const NavDown = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos > currentScrollPos;

      setVisible(!scrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed ${visible ? 'translate-y-full' : 'translate-y-0'} bottom-0 w-full h-[50px] text-lg z-50 lg:translate-y-full transition-all`}>
      <div className="border-t border-gray-200 dark:border-zinc-700 flex justify-evenly text-center h-full px-3 py-4 bg-gray-50 dark:bg-black/40 backdrop-blur-xl backdrop-saturate-200  dark:text-white">
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
};

export default NavDown;
