/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, {
  useRef, MouseEvent, useState, useEffect,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
import { signIn } from 'next-auth/react';
import bg from '../../../../public/images/Background/login_bg.jpg';

function LoginClient() {
  const inputUsername = useRef('');

  const inputPassword = useRef('');

  const params = useSearchParams();

  const error = params.get('error');

  const [classError, setClassError] = useState(
    'border-fieldGreen focus:ring-fieldGreen',
  );
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    if (error) {
      setClassError('border-red-500 focus:ring-red-500');
      setIsFormValid(false);
    } else {
      setClassError('border-fieldGreen focus:ring-fieldGreen');
      setIsFormValid(true);
    }
  }, []);

  const googleHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn('google', {
      callbackUrl: '/Home/',
    });
  };

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signIn('credentials', {
      username: inputUsername.current,
      password: inputPassword.current,
      redirect: true,
      callbackUrl: '/Home/',
    });
  };
  return (
    <div className="min-h-screen w-full grid grid-cols-2 max-sm:grid-cols-1 bg-black">
      <div className="w-full h-full flex flex-col items-center justify-center bg-black max-sm:px-3">
        <div className="min-w-[300px] max-sm:w-full min-h-[300px] w-[500px] h-[550px] bg-white rounded-lg flex flex-col items-center justify-between">
          <div className="flex flex-col justify-center items-center w-full pt-10 pb-5">
            <h1 className="text-6xl max-sm:text-4xl font-bold">
              THE
              {' '}
              <span className="text-fieldGreen">FIELD</span>
            </h1>
          </div>
          <h3 className="font-medium ml-1">Welcome back!</h3>
          <form
            action=""
            className="flex flex-col justify-between gap-4 w-full h-full px-5 py-10"
          >
            <div className="w-full">
              {isFormValid ? (
                <label className="text-sm">
                  Username
                </label>
              ) : (
                <label
                  htmlFor=""
                  className="text-sm text-red-500 flex justify-between items-center pr-2"
                >
                  <h1>Username</h1>
                  <h1 className="italic">Check your Username</h1>
                </label>
              )}
              <div className="flex relative gap-2 w-full items-center justify-start">
                <input
                  type="text"
                  required
                  placeholder="Enter your username"
                  className={`rounded-lg placeholder:text-sm px-4 py-2 border w-full focus:outline-none focus:ring-1  transition-all ${classError}`}
                  onChange={(e) => (inputUsername.current = e.target.value)}
                />
                <FaUserCircle
                  size={20}
                  className={
                    isFormValid
                      ? 'ml-4 absolute right-3'
                      : 'ml-4 absolute right-3 text-red-500'
                  }
                />
              </div>

              <div className="w-full mt-4">
                {isFormValid ? (
                  <label htmlFor="" className="text-sm">
                    Password
                  </label>
                ) : (
                  <label
                    htmlFor=""
                    className="text-sm text-red-500 flex justify-between items-center pr-2"
                  >
                    <h1>Password</h1>
                    <h1 className="italic">Check your Password</h1>
                  </label>
                )}

                <div className="flex relative gap-2 w-full items-center justify-start">
                  <input
                    required
                    type="password"
                    placeholder="Enter your password"
                    className={`rounded-lg placeholder:text-sm px-4 py-2 border w-full focus:outline-none focus:ring-1 focus:ring-fieldGreen transition-all ${classError}`}
                    onChange={(e) => (inputPassword.current = e.target.value)}
                  />
                  <HiLockClosed
                    size={20}
                    className={
                      isFormValid
                        ? 'ml-4 absolute right-3'
                        : 'ml-4 absolute right-3 text-red-500'
                    }
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => onSubmit(e)}
              className="w-full relative rounded-lg bg-fieldGreen border border-fieldGreen py-2 text-white font-medium hover:bg-white hover:text-fieldGreen transition-all
            after:content-[''] after:h-[4px] after:w-full after:bg-black after:mt-2 after:absolute after:left-0 after:bottom-[-1rem]"
            >
              Login
            </button>
          </form>
          <div className="w-full px-3 py-4">
            <button
              aria-label="Continue with google"
              type="button"
              onClick={(e) => googleHandler(e)}
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-2"
            >
              <svg
                width={19}
                height={20}
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>

            <h1 className="py-3">
              Don't have an account yet?
              <Link
                href="/account/signup"
                className="px-3 underline text-fieldGreen"
              >
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-full max-sm:hidden">
        <Image
          src={bg}
          className="absolute w-full h-full object-cover"
          alt="imagebg"
          fill
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute z-[2] flex flex-col items-start px-4 justify-center w-full h-full text-6xl text-white">
          <h1 className="">DISCOVERING</h1>
          <h1 className="text-fieldGreen py-3"> SPORTS </h1>
          <h1> TALENT </h1>
          <h3 className="text-xl my-4 mx-1">
            Together, we can make a difference
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LoginClient;
