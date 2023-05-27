import React from "react";
import { NavBar } from "../components/Home/NavBar";
import SideBar from "../components/Home/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <NavBar />
      <SideBar/>
      {children}
    </section>
  );
}
