import Link from 'next/link';
import { montserrat } from '@/app/fonts';
import 'animate.css';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Suspense } from 'react';
import OrgFinishForm from '../components/OrgFinishForm';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <div
      className={`w-full h-full bg-gray-100  dark:bg-zinc-900 rounded-xl p-2 flex flex-col gap-4 animate__animated animate__zoomInUp ${montserrat.variable}`}
    >
      <h1 className="w-full relative bg-zinc-200 dark:bg-zinc-800 py-3 text-center rounded-lg text-lime-600 dark:text-zinc-300 font-montserrat">
        <Link
          className="absolute dakr:bg-zinc-950 p-1 py-2 left-2 bottom-2 rounded-lg"
          href="/account/finish/org/"
        >
          <IoChevronBackSharp />
        </Link>
        Sign Up
      </h1>
      <div className="overflow-y-auto  text-start text-zinc-900 dark:text-zinc-300 p-3 flex flex-col gap-3">
        <Suspense
          fallback={
            <div className="fixed inset-0 grid place-items-center">
              <div>
                <span className="text-3xl font-bold animate-bounce">.</span>
              </div>
            </div>
          }
        >
          <OrgFinishForm />
        </Suspense>
      </div>
    </div>
  );
}
