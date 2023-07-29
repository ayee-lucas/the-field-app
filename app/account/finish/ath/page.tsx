import { montserrat } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import bgNba from '@/public/images/Background/dunk.jpeg';
import bgSoccer from '@/public/images/Background/soccer.jpeg';

export default async function Page() {
  return (
    <div
      className={`min-h-screen w-full ${montserrat.variable} grid items-center`}
    >
      <div className="bg-black/50 p-4 backdrop-blur">
        <h1 className="text-2xl font bold text-center">
          THE <span className="text-fieldGreen">FIELD</span>
        </h1>
        <div className="w-full p-4 flex flex-col gap-2">
          <h2 className="text-xl font-bold font-montserrat">
            Your Journey Starts Here:
          </h2>
          <p className="text-zinc-300">
            No matter where you are in your athletic journey, THE FIELD is here
            to support you every step of the way. We celebrate diversity and
            welcome athletes from all walks of life, from different sports and
            various skill levels.
          </p>
          <p className="text-zinc-300">
            Whether you're a young prodigy aiming to make it big or a seasoned
            veteran looking to inspire the next generation, THE FIELD provides
            the platform to elevate your game.
          </p>
        </div>
      </div>

      <div className="fixed inset-0 bg-black/40 -z-[9]" />

      <div className="absolute inset-0">
        <div className=" grid grid-rows-2 min-h-screen">
          <div className="w-full h-full relative">
            <Image
              src={bgNba}
              fill
              className="object-cover w-full h-full -z-10"
              alt="bg"
            />
          </div>
          <div className="w-full h-full relative">
            <Image
              src={bgSoccer}
              fill
              className="object-cover w-full h-full -z-10"
              alt="bg"
            />
          </div>
        </div>
      </div>
      <Link
        href="/account/finish/ath/finish/"
        className="px-5 py-3 bg-fieldGreen text-white text-center absolute bottom-28 inset-x-0"
      >
        NEXT
      </Link>
    </div>
  );
}
