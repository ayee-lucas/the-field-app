'use client';

import { ROUTES } from '@/app/config';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineComment,
  AiOutlineStar,
} from 'react-icons/ai';

export const NavDown = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(1);

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
    <div
      className={`fixed ${visible ? 'translate-y-[100%] opacity-0' : 'translate-y-0'
        } bottom-5 w-full px-9 h-[50px] text-lg z-50 lg:translate-y-full transition-all`}
    >
      <div className="flex w-full py-1 rounded-xl items-center justify-evenly bg-zinc-800/40 backdrop-blur backdrop-saturate-150">
        <Link
          onClick={() => setIndex(1)}
          className={`transition-all ${index === 1 ? 'bg-green-800 rounded-lg py-3 px-4' : 'bg-none'
            }`}
          href={ROUTES.feed}
        >
          <AiOutlineHome />
        </Link>
        <Link
          onClick={() => setIndex(2)}
          className={`transition-all ${index === 2 ? 'bg-green-800 rounded-lg py-3 px-4' : 'bg-none'
            }`}
          href={ROUTES.feed}
        >
          <AiOutlineComment />
        </Link>
        <Link
          onClick={() => setIndex(3)}
          className={`transition-all ${index === 3 ? 'bg-green-800 rounded-lg py-3 px-4' : 'bg-none'
            }`}
          href={ROUTES.feed}
        >
          <AiOutlineBell />
        </Link>
        <Link
          onClick={() => setIndex(4)}
          className={`transition-all ${index === 4 ? 'bg-green-800 rounded-lg py-3 px-4' : 'bg-none'
            }`}
          href={ROUTES.feed}
        >
          <AiOutlineStar />
        </Link>
      </div>
    </div>
  );
};

export default NavDown;
