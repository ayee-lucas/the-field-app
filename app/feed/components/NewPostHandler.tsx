'use client';

import { useState, createContext, SetStateAction, useMemo } from 'react';
import NewPostButton from './NewPostButton';

type Context = {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

export const NewPostContext = createContext<Context | undefined>(undefined);

export default function NewPostHandler() {
  const [loading, setLoading] = useState<boolean>(false);

  const values = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading, setLoading]
  );

  return (
    <NewPostContext.Provider value={values}>
      <NewPostButton />
    </NewPostContext.Provider>
  );
}
