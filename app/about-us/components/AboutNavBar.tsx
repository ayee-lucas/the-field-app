'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [fade, setFade] = useState('border-b');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50 && currentScrollY > prevScrollY) {
        setFade('-translate-y-20 duration-500');
      } else {
        setFade('duration-200 border-b shadow-lg');
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="fixed w-full z-50">
      <nav
        className={`bg-white dark:bg-black  transition-all border-gray-200 dark:border-zinc-800 ${fade}`}
      >
        <div className="min-h-[80px] text-xs lg:text-base font-semibold flex flex-wrap items-center justify-between mx-auto p-2 max-md:px-5 px-20 lg:px-32">
          <div className="flex justify-between gap-x-10 lg:gap-x-20 text-center font-bold">
            <Link href="/" className="text-black dark:text-white max-md:w-20">
              GO HOME
            </Link>
          </div>

          <span className="self-center text-3xl md:text-4xl font-bold whitespace-nowrap dark:text-white">
            THE <span className="text-fieldGreen">FIELD</span>
          </span>

          <div className="flex justify-between gap-x-10 lg:gap-x-20 text-center">
            <Link
              href="/auth/signup"
              className="text-black dark:text-white max-md:w-20 text-center font-bold"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
