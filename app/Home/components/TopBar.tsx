'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useContext, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { OuterLClientContext } from './OuterLayoutClient';

export default function TopBar() {
  const context = useContext(OuterLClientContext);

  if (!context) {
    throw new Error('OuterLClientContext must be used within <OuterLClientContext.Provider>');
  }

  const setOpen = context?.setOpen;

  const [shadow, setShadow] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShadow('shadow-md');
      } else {
        setShadow('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed transition-all flex items-center max-sm:flex-row-reverse justify-between z-[998] 
      w-full py-2 px-4 bg-white/70 max-sm:bg-white/80 backdrop-blur-lg backdrop-saturate-150 ${shadow}
      dark:bg-black/70
      `}
    >
      <h1 className="text-2xl font-bold max-sm:hidden">
        FIEL
        <span className="text-fieldGreen">D</span>
      </h1>
      <FiSearch className="sm:hidden" size={25} />
      <Avatar onClick={() => setOpen(true)}>
        <AvatarImage src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="user Image" />
        <AvatarFallback>PFP</AvatarFallback>
      </Avatar>
    </div>
  );
}
