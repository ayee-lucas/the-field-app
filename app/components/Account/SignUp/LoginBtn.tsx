'use client';

import Link from 'next/link';
import React from 'react';

const LoginBtn = () => (
  <Link
    type="button"
    className="text-fieldGreen underline font-medium "
    href="/auth/signin"
  >
    Login
  </Link>
);

export default LoginBtn;
