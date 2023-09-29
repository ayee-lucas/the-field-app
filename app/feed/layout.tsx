import React from 'react';
import { redirect } from 'next/navigation';
import { goGetUserById } from '@/app/server-actions/signin/actions';
import { getGoSession } from '../tools/getGoServerSession';
import OuterLayoutClient from './components/OuterLayoutClient';
import { Session } from '../types/sessionType';
import { getProfile } from '../server-actions/profile/actions';
import { ROUTES } from '../config';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getGoSession();

  if (session?.user) {
    const getUser = await goGetUserById(session?.user?.sub);

    if (!getUser.data) {
      return redirect(ROUTES.signin);
    }

    if (!getUser.data.profile_id) {
      return redirect(ROUTES.finishAcc);
    }

    const profile = await getProfile(getUser.data.profile_id);

    if ('error' in profile) {
      return redirect(ROUTES.signin);
    }

    if (!profile.data.finished) {
      return redirect(ROUTES.finishAcc);
    }
  }

  return (
    <section>
      <OuterLayoutClient session={session as Session} />
      <div className="pl-[240px] pr-[20rem] max-lg:pl-0 max-lg:pr-0 max-sm:pt-3">
        {children}
      </div>
    </section>
  );
}
