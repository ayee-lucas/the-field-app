import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./components/HeroMain/About";
import Image from "next/image";
import bg from "../public/images/Background/main-bg.jpeg";
import { poppins } from "./fonts";
import { IoIosArrowDown } from "react-icons/io";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (session?.user) redirect("/Home");

  return (
    <>
      <main className="flex relative min-h-screen flex-col items-center bg-black">
        {/** Background */}
        <Image
          src={bg}
          alt="background"
          fill
          placeholder="blur"
          className="absolute w-full h-full object-cover"
          priority
        />

        {/** Overlay */}
        <div className="absolute inset-0 bg-black/80 z-[1]"></div>
        <Navbar />
        <div className="flex flex-col items-start px-5 justify-center z-20 h-[900px] w-full text-white">
          <h1 className={`${poppins.className} text-6xl font-medium`}>
            <span className="text-fieldGreen">Discovering</span> Sports Talent
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
        <IoIosArrowDown
          size={40}
          className="absolute bottom-0 inset-x-[50%] z-20 animate-bounce text-white text-6xl"
        />
      </main>

      <About />
    </>
  );
}
