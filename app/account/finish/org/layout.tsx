import { montserrat } from '@/app/fonts';
import { getGoSession } from '@/app/tools/getGoServerSession';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getGoSession();

  if (!session?.user?.username) {
    return redirect('/auth/signin');
  }

  return (
    <section className={`w-full min-h-screen p-2 ${montserrat.variable}`}>
      <h1 className="text-center py-4 text-2xl font-montserrat font-light">
        THE
        <span className="text-fieldGreen"> FIELD</span>
      </h1>
      {/** Container */}
      <div className="w-full min-h-[calc(100vh-10rem)] max-w-xl px-3">
        <h2 className="w-full text-center py-4">Glad to see you here!</h2>
        {children}
      </div>
    </section>
  );
}
