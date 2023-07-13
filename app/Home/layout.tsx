import React from 'react';
import { getGoSession } from '../tools/getGoServerSession';
import OuterLayoutClient from './components/OuterLayoutClient';
import { Session } from '../types/sessionType';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getGoSession();

  return (
    <section>
      <OuterLayoutClient session={session as Session} />
      <div className="pl-[240px] pr-[20rem] max-lg:pl-0 max-lg:pr-0 max-sm:pt-3">{children}</div>
    </section>
  );
}
