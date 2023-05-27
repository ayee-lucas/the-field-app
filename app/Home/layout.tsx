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

      <div className="w-full h-full min-h-screen pl-60 pt-14">{children}</div>
    </section>
  );
}
