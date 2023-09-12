'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { poppins, roboto } from '../fonts';

const Navbar = () => {
  const [navSticky, setNavSticky] = useState('bg-transparent py-10');

  const [mobileMenu, setMobileMenu] = useState(false);

  const [textColor, setTextColor] = useState('text-white');

  const prevScrollPosition = useRef(0);

  useEffect(() => {
    prevScrollPosition.current = window.pageYOffset;
    window.scrollTo(0, prevScrollPosition.current - 90);

    const timeout = setTimeout(() => {
      window.scrollTo(0, prevScrollPosition.current);
    }, 0);

    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavSticky(
          'bg-white/80 py-6 dark:bg-black/80 backdrop-saturate-200 backdrop-blur-2xl'
        );
        setTextColor('text-fieldGreen');
      } else {
        setNavSticky('bg-transparent py-10');
        setTextColor('text-white');
      }

      return () => clearTimeout(timeout);
    };

    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <>
      <nav
        className={`${poppins.className} flex w-full fixed transition-all p-3 px-11 z-50 justify-between items-center ${navSticky} `}
      >
        <h1
          className={`${roboto.className} ${textColor} text-4xl font-semibold`}
        >
          THE <span className="text-fieldGreen">FIELD</span>
        </h1>
        <ul
          className={`flex items-center gap-10 ${textColor} text-xl max-sm:hidden`}
        >
          <li className="">
            <Link href="/Home">Home</Link>
          </li>
          <li className="">
            <Link href="/">About</Link>
          </li>
          <li className="">
            <Link href="/auth/signup">Get Started</Link>
          </li>
        </ul>
      </nav>
      {mobileMenu ? (
        <RxCross2
          className="text-2xl text-white sm:hidden fixed top-7 right-4 z-[101]"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      ) : (
        <HiMenuAlt3
          className="text-2xl text-white sm:hidden fixed top-7 right-4 z-[101]"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <nav
        className={
          mobileMenu
            ? 'fixed grid place-content-center inset-0 bg-black z-[100] transition-all'
            : 'fixed inset-0 bg-black z-[100] left-[100%] transition-all'
        }
      >
        <ul className=" h-full w-full flex flex-col text-center justify-center items-center gap-10 text-3xl text-white">
          <li className="w-full">
            <Link href="/Home">Home</Link>
          </li>
          <li className="w-full">
            <Link href="/">About</Link>
          </li>
          <li className="w-full">
            <Link href="/auth/signup">Get Started</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
