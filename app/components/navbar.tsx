"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { poppins, roboto } from "../fonts";

const Navbar = () => {
  const [navSticky, setNavSticky] = useState("bg-transparent py-10");

  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavSticky("bg-white py-6 dark:bg-black");
        setTextColor("text-fieldGreen");
      } else {
        setNavSticky("bg-transparent py-10");
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      className={`${poppins.className} flex w-full fixed transition-all p-3 px-11 z-50 justify-between items-center ${navSticky}`}
    >
      <h1 className={`${roboto.className} ${textColor} text-4xl font-semibold`}>
        THE <span className="text-fieldGreen">FIELD</span>
      </h1>
      <ul className={`flex items-center gap-10 ${textColor} text-xl`}>
        <li className="">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="">
          <Link href={"/"}>About</Link>
        </li>
        <li className="">
          <Link href={"/"}>Get Started</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
