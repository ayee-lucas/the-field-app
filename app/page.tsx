import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./components/HeroMain/About";
import { poppins } from "./fonts";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <main className="flex relative min-h-screen flex-col items-center main-bg-img bg-fixed bg-cover bg-no-repeat">
        {/** Overlay */}
        <div className="absolute inset-0 bg-black/70 z-[1]"></div>
        <Navbar />
        <div className="flex flex-col items-start px-5 justify-center z-20 h-[900px] w-full text-white">
          <h1 className={`${poppins.className} text-6xl font-medium`}>
            Discovering Sports Talent
          </h1>
          <h3 className="py-3 text-xl">
            The Global Platform for Talent and Sports Organizations
          </h3>
          <Link
            className=" p-3 border my-4 border-white rounded-lg hover:text-lime-700 hover:bg-white transition-all"
            href={"/"}
          >
            Create an Account
          </Link>
        </div>
        <IoIosArrowDown size={40} className="absolute bottom-0 inset-x-[50%] z-20 animate-bounce text-white text-6xl" />

      </main>

      <About />
    </>
  );
}
