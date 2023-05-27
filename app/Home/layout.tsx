import React from "react";
import { NavBar } from "../components/Home/NavBar";
import SideBar from "../components/Home/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full min-h-screen">
      <NavBar />
      <SideBar />

      <div className="fixed top-[60px] left-[240px] max-md:left-0 w-full z-50 h-screen">{children}</div>
    </section>
  );
}
