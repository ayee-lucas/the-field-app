import LoginBtn from '@/app/components/Account/SignUp/LoginBtn';
import Image from 'next/image';
import formImage from '@/public/images/Background/court_grayscale.jpeg';
import bg from '@/public/images/Background/bg_signup.jpeg';
import { montserrat } from '@/app/fonts';
import { getGoSession } from '@/app/tools/getGoServerSession';
import { redirect } from 'next/navigation';
import SignUpForm from './components/SignUpForm';

export default async function Page() {
  const session = await getGoSession();

  console.log(session);

  if (session?.status === 'authenticated') {
    redirect('/Home');
  }

  return (
    <main className={`relative min-h-screen w-full flex flex-col max-sm:px-2 max-lg:px-5 justify-center items-center bg-black ${montserrat.variable}`}>
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="bg"
        className="absolute w-full h-full object-cover"
      />

      {/** Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]" />

      {/** Container */}
      <div className="bg-white dark:bg-black w-1/2 max-sm:w-full max-lg:w-full h-full rounded-lg shadow-lg z-10">
        <div className="flex items-center justify-between p-4">
          <div className="relative max-w-[400px] w-full h-[600px] bg-black max-sm:hidden max-lg:hidden">
            <Image
              className="absolute w-full h-full self-center object-cover"
              src={formImage}
              placeholder="blur"
              fill
              alt="bg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]" />

            <div className="absolute top-0 left-0 w-full h-full  text-white z-[2]">
              <h1 className="text-8xl font-bold px-2">
                R
                {' '}
                <br />
                {' '}
                E
                {' '}
                <br />
                {' '}
                A
                {' '}
                <br />
                {' '}
                D
                {' '}
                <br />
                <span className="text-fieldGreen"> Y?</span>
              </h1>
            </div>
          </div>
          <div className="w-full h-full p-4 max-sm:p-1">
            <h1 className="text-4xl font-bold pb-5 max-sm:pb-2">
              SIGN
              {' '}
              <span className="text-fieldGreen">UP</span>
            </h1>
            <h1 className="text-xl py-6 max-sm:py-2 max-sm:text-lg font-medium font-montserrat">
              CREATE
              {' '}
              <span className="text-fieldGreen">AN</span>
              {' '}
              ACCOUNT
            </h1>
            <SignUpForm />
            <h1 className="text-sm py-4 max-sm:py-0">
              Already have an account?
              {' '}
              <LoginBtn />
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
