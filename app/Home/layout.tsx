import React from 'react'
import { NavBar } from '../components/Home/NavBar';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
      <section className="h-full">
        <NavBar/>
        {children}
      </section>
    );
  }
