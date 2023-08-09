'use client';

import { useState, createContext, SetStateAction, useMemo } from 'react';
import PostEditor from './PostEditor';
import NewPostButton from './NewPostButton';

type Context = {
  loading: boolean;
  toggleEditor: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  setToggleEditor: React.Dispatch<SetStateAction<boolean>>;
};

export const NewPostContext = createContext<Context | undefined>(undefined);

export default function NewPostHandler() {
  const [loading, setLoading] = useState<boolean>(false);
  const [toggleEditor, setToggleEditor] = useState<boolean>(false);

  const values = useMemo(
    () => ({
      loading,
      setLoading,
      toggleEditor,
      setToggleEditor,
    }),
    [loading, setLoading, toggleEditor, setToggleEditor]
  );

  return (
    <NewPostContext.Provider value={values}>
      <NewPostButton />
      {toggleEditor && <PostEditor />}
    </NewPostContext.Provider>
  );
}
