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
      <NavBar />
      <SideBar />

      <div className="pt-[60px] pl-[240px] max-md:pl-0">{children}</div>
    </section>
  );
}
