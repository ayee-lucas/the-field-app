import Link from 'next/link';
import { montserrat } from '@/app/fonts';
import 'animate.css';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <div
      className={`w-full h-full bg-gray-100  dark:bg-zinc-900 rounded-xl p-2 flex flex-col gap-4  animate__animated animate__zoomInUp ${montserrat.variable}`}
    >
      <h1 className="w-full bg-zinc-200 dark:bg-zinc-800 py-3 text-center rounded-lg text-lime-600 dark:text-zinc-300 font-montserrat">
        What are organizations?
      </h1>
      <div className="overflow-y-auto max-h-[400px] text-start text-zinc-900 dark:text-zinc-300 p-3 flex flex-col gap-3">
        <p>
          The organizations that we choose to carry out this project are
          organizations that want to create opportunities for talented people,
          which is why we have given them the necessary resources to make it
          easier for them to contact the people registered on our platform.
        </p>
        <p>
          By the time the organizations contact the people and make the decision
          to sponsor them, we have already fulfilled our job, which is to create
          opportunities and from that moment on, the organizations will take
          charge of continuing to polish the talent and career of the talented
          promises they chose.
        </p>
        <p>
          Organizations will always be in contact with our team so that we can
          provide them with the best of the best and thus together we can
          continue to take advantage of the talent that exists around the world.
        </p>
      </div>
      <div className="w-full py-2 flex items-center justify-between gap-2">
        <Link
          className="bg-zinc-200 dakr:bg-zinc-950 p-1 py-2 w-full text-center text-fieldGreen rounded-lg"
          href="/account/finish/"
        >
          Back
        </Link>
        <Link
          className="bg-fieldGreen p-1 py-2 w-full text-center text-white rounded-lg"
          href="/account/finish/org/finish/"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
