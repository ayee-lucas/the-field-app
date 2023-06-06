import React from 'react';
import { NavBar } from '../components/Home/NavBar';
import NavDown from '../components/Home/NavDown';
import RightBar from './components/RightBar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavDown />
      <NavBar />
      <RightBar />
      <div className="pt-[60px] pl-[240px] pr-[20rem] max-lg:pl-0">{children}</div>
    </section>
  );
}
