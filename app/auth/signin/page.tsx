/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { redirect } from 'next/navigation';
import { montserrat } from '@/app/fonts';
import { getGoSession } from '@/app/tools/getGoServerSession';
import SideImage from './components/SideImage';
import SignInForm from './components/SignInForm';
import GoogleLogin from './components/GoogleLogin';

export default async function Page() {
  const session = await getGoSession();

  if (session?.user) {
    return redirect('/Home');
  }

  return (
    <div className={`min-h-screen w-full grid grid-cols-2 max-sm:grid-cols-1 bg-black ${montserrat.variable}`}>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-black max-sm:px-3">

        {/** Container */}
        <div className="min-w-[300px] max-sm:w-full min-h-[300px] w-[500px] h-[550px] px-3 bg-white
                        dark:bg-black rounded-lg flex flex-col items-center justify-between"
        >
          <div className="flex flex-col justify-center items-center w-full pt-10 ">
            <h1 className="text-6xl max-sm:text-4xl font-bold">
              THE
              {' '}
              <span className="text-fieldGreen">FIELD</span>
            </h1>
          </div>
          <h3 className="font-medium text-xl ml-1 font-montserrat">WELCOME BACK!</h3>
          <SignInForm />
          <GoogleLogin />
        </div>
      </div>
      <SideImage />
    </div>
  );
}
