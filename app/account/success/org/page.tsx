import { montserrat } from '@/app/fonts';
import Link from 'next/link';

export default function Page() {
  return (
    <div
      className={`min-h-screen w-full dark:bg-black grid place-items-center p-2 ${montserrat.variable}`}
    >
      <div>
        <h1 className="font-montserrat text-2xl ">THE FIELD</h1>
        <h1 className="text-fieldGreen text-xl">Success!</h1>
        <p className="text-zinc-400 mb-3">
          Your application has been successfully submitted. We will review it
          and let you know if it has been approved. For now, you can continue
          using your account as normal while we make a decision. You will
          receive a notification when a decision is made.
        </p>
        <Link
          href="/Home/"
          className="my-2 px-2 py-2 bg-white text-black rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
