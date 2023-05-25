'use client'

import React from "react";
import { signIn } from "next-auth/react";

const LoginBtn = () => {
  return (
    <button
      className="text-fieldGreen underline font-medium "
      onClick={() => signIn()}
    >
      Login
    </button>
  );
};

export default LoginBtn;
