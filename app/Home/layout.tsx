import React from 'react';
import { NavBar } from '../components/Home/NavBar';
import NavDown from '../components/Home/NavDown';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavDown />
      <NavBar />
      <div className="pt-[60px] pl-[240px] max-lg:pl-0">{children}</div>
    </section>
  );
}
