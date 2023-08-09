import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { redirect } from 'next/navigation';
import Navbar from './components/navbar';
import About from './components/HeroMain/About';
import bg from '../public/images/Background/main-bg.jpeg';
import { poppins } from './fonts';
import { getGoSession } from './tools/getGoServerSession';

export default async function Home() {
  const session = await getGoSession();

  if (session?.status === 'authenticated') {
    redirect('/Home');
  }

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
        <div className="absolute inset-0 bg-black/80 z-[1]" />
        <Navbar />
        <div className="flex flex-col items-start px-5 justify-center z-20 h-[900px] w-full text-white">
          <h1
            className={`${poppins.className} text-6xl max-sm:text-4xl font-medium`}
          >
            <span className="text-fieldGreen">Discovering</span> Sports Talent
          </h1>
          <h3 className="py-3 text-xl max-sm:text-lg">
            The Global Platform for Talent and Sports Organizations
          </h3>
          <Link
            className=" p-3 border my-4 border-white rounded-lg hover:text-lime-700 hover:bg-white transition-all"
            href="/"
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
