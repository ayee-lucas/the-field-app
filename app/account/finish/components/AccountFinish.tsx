'use client';

import { useEffect, useState } from 'react';
import { montserrat } from '@/app/fonts';
import { Session } from '@/app/types/sessionType';
import AccountFinishForm from './AccountFinishForm';

type Props = {
  session: Session
};

export default function AccountFinish({ session }:Props) {
  const [textClass, setTextClass] = useState<string>('text-xl inset-0 grid place-items-center bg-black/50 backdrop-blur-sm z-[999]');
  const userId = session.user?.sub.toString();

  if (!userId) throw new Error('User id not found');

  useEffect(() => {
    setTimeout(() => {
      setTextClass('top-20  grid place-items-center bg-black/0 z-[999]');
    }, 1000);
  }, []);

  return (
    <div className={`${montserrat.variable} flex flex-col justify-center items-center p-5 min-h-screen dark:text-white`}>
      <div className={`transition-all absolute font-montserrat ${textClass}`}>
        Let's finish your account.
      </div>
      <h1 className="text-3xl font-montserrat font-bold p-5">
        THE
        {' '}
        <span className="text-fieldGreen">F</span>
        IELD
      </h1>
      <h1>
        Hey there,
        {' '}
        <span className="font-bold">
          {session.user?.username}
        </span>
        {' '}
        👋
      </h1>
      <AccountFinishForm userId={userId} />

    </div>
  );
}
