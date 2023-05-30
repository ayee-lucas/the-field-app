'use client';

import React, { useEffect, useState } from 'react';
import { montserrat, roboto } from '@/app/fonts';
import { AiTwotoneLock } from 'react-icons/ai';
import { signUp } from '@/app/account/signup/actions';
import { useRouter } from 'next/navigation';
import FormInput from './FormInput';

function SignUpFirst() {
  const [password, setPassword] = useState('');

  const [data, setData] = useState({});

  const [confirmPassword, setConfirmPassword] = useState('');

  const [validPassword, setValidPassword] = useState(true);

  const [responseError, setResponseError] = useState('');

  const [defaultError, setDefaultError] = useState(true);

  const router = useRouter();

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await signUp(data);
      console.log(response);

      if (response.message === 'success') {
        setResponseError('');
        router.push('/account/signin/');
      } else {
        setDefaultError(false);
        setResponseError(`${response.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      /** Password don't match */
      setValidPassword(false);
      setResponseError('');
    } else {
      setValidPassword(true);
      setData({ ...data, password });
    }
  }, [password, confirmPassword]);

  return (
    <form
      action=""
      className={`${montserrat.className} ${roboto.variable} w-full h-full min-h-[200px] p-2`}
    >
      <h1 className="text-xl py-6 font-medium">ACCOUNT INFORMATION</h1>

      {responseError !== '' ? (
        <h1 className="text-red-600 text-sm px-2 font-medium italic">
          {responseError}
        </h1>
      ) : null}
      <FormInput
        label="Username"
        placeholder="Enter your username"
        error={defaultError}
        type="text"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>,
        ) => setData({ ...data, username: e.target.value })}
      />
      <FormInput
        error={defaultError}
        label="Email"
        placeholder="Enter your email"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>,
        ) => setData({ ...data, email: e.target.value })}
        type="email"
      />
      <div className="relative flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-4 h-full">
          <FormInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            error={validPassword}
            icon={(
              <AiTwotoneLock
                className={
                  !validPassword ? 'mx-2 text-red-600' : 'mx-2 text-black'
                }
              />
            )}
          />
        </div>

        <div className="flex justify-between items-center gap-4 h-full">
          <FormInput
            label="Confirm Password"
            placeholder="Enter your password"
            type="password"
            error={validPassword}
            icon={(
              <AiTwotoneLock
                className={
                  !validPassword ? 'mx-2 text-red-600' : 'mx-2 text-black'
                }
              />
            )}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      {validPassword ? null : (
        <h1 className="text-red-600 text-sm px-2 font-light">
          Passwords do not match
        </h1>
      )}

      <div className="flex justify-start items-center mt-2 ">
        <button
          type="submit"
          disabled={!validPassword}
          className="hover:text-white ml-3 w-full hover:bg-green-600 rounded-lg py-2 px-6 border-green-600 border-[2px] disabled:border-[1px] disabled:hover:bg-transparent transition-all disabled:text-gray-500 disabled:border-black"
          onClick={(e) => onClick(e)}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUpFirst;
