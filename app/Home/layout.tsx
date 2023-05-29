import React from "react";
import { NavBar } from "../components/Home/NavBar";
import DarkMode from "../components/DarkMode";
import NavDown from "../components/Home/NavDown";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <section className="dark">
        <DarkMode>
          <NavBar />
          <NavDown/>
          <div className="pt-[60px] pl-[240px] max-lg:pl-0">{children}</div>
        </DarkMode>
    </section>
  );
}
