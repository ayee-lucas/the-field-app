import React from 'react';
import { NavBar } from '../components/Home/NavBar';
import SideBar from '../components/Home/SideBar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DarkMode>
        <NavDown />
        <NavBar />
        <div className="pt-[60px] pl-[240px] max-lg:pl-0">{children}</div>
      </DarkMode>
    </section>
  );
}
