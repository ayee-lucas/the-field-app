import { montserrat } from '@/app/fonts';
import { getGoSession } from '@/app/tools/getGoServerSession';
import { redirect } from 'next/navigation';
import { goGetUserById } from '@/app/auth/signin/actions';
import ImageHandlerCient from './components/ImageHandlerClient';

export default async function Page() {
  const session = await getGoSession();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  if (session?.user?.picture.pictureKey) {
    redirect('/Home');
  }

  const getUser = await goGetUserById(session.user.sub);

  if (!getUser.user?.finished) {
    redirect('/account/finish');
  }

  return (
    <section
      className={`flex flex-col items-center min-h-screen py-24 px-10 ${montserrat.variable}`}
    >
      <h1 className="font-montserrat text-xl py-10 text-fieldGreen dark:text-lime-500">
        Let's add an image to your account!
      </h1>
      <ImageHandlerCient session={session} />
    </section>
  );
}
