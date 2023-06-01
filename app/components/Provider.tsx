'use client';

import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => <SessionProvider>{children}</SessionProvider>;

export default Provider;
