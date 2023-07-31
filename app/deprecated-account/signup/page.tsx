import LoginBtn from '@/app/components/Account/SignUp/LoginBtn';
import SignUpForm from '@/app/components/Account/SignUp/SignUpForm';
import Image from 'next/image';
import formImage from '@/public/images/Background/court_grayscale.jpeg';
import bg from '@/public/images/Background/bg_signup.jpeg';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/Home');
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col max-sm:px-2 justify-center items-center bg-black">
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="bg"
        className="absolute w-full h-full object-cover"
      />
      {/** Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]" />
      <div className="bg-white w-1/2 max-sm:w-full h-full rounded-lg shadow-lg z-10">
        <div className="flex items-center justify-between p-4">
          <div className="relative max-w-[400px] min-h-[500px] w-full h-full bg-black max-sm:hidden">
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
                R <br /> E <br /> A <br /> D <br />
                <span className="text-fieldGreen"> Y?</span>
              </h1>
            </div>
          </div>
          <div className="w-full h-full p-4">
            <h1 className="text-4xl font-bold">
              SIGN <span className="text-fieldGreen">UP</span>
            </h1>
            <SignUpForm />
            <h1 className="text-sm py-4 ">
              Already have an account? <LoginBtn />
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
