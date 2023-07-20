import { getGoSession } from '@/app/tools/getGoServerSession';
import { redirect } from 'next/navigation';
import { goGetUserById } from '@/app/auth/signin/actions';
import AccountFinish from './components/AccountFinish';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const session = await getGoSession();
  if (!session?.user?.username) {
    return redirect('/auth/signin');
  }
  const getUser = await goGetUserById(session?.user?.sub);

  if (getUser.user?.finished) {
    return redirect('/Home');
  }

  return (
    <AccountFinish session={session} />
  );
}
