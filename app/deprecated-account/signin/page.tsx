import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import LoginClient from '@/app/components/Account/SignIn/LoginClient';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user?.username) {
    redirect('/Home/');
  }



  return <LoginClient />;
}
