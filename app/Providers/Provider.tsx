'use client';

import { FC, ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default Provider;
