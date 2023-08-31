import { getGoSession } from '@/app/tools/getGoServerSession';
import { redirect } from 'next/navigation';
import { goGetUserById } from '@/app/server-actions/signin/actions';
import { getProfile } from '@/app/server-actions/profile/actions';
import AccountFinish from './components/AccountFinish';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const session = await getGoSession();

  if (!session?.user?.username) {
    return redirect('/auth/signin');
  }

  const getUser = await goGetUserById(session?.user?.sub);

  if (!getUser.user?.profile_id) {
    return redirect('/auth/signin');
  }

  const profile = await getProfile(getUser.user.profile_id);

  if ('error' in profile) {
    return redirect('/auth/signin/');
  }

  if (profile.data.finished) {
    return redirect('/feed/');
  }

  return <AccountFinish session={session} />;
}
