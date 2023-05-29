import React from "react";
import { NavBar } from "../components/Home/NavBar";
import SideBar from "../components/Home/SideBar";
import NavDown from "../components/Home/NavDown";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      <NavDown/>
      <div className="pt-[60px] pl-[240px] max-lg:pl-0">{children}</div>
    </section>
  );
}
