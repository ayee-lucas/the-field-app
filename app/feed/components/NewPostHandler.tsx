'use client';

import React, { useState, createContext, SetStateAction, useMemo } from 'react';
import PostEditor from './PostEditor';
import NewPostButton from './NewPostButton';

type Context = {
  loading: boolean;
  toggleEditor: boolean;
  progress: number;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  setToggleEditor: React.Dispatch<SetStateAction<boolean>>;
  setProgress: React.Dispatch<SetStateAction<number>>;
};

export const NewPostContext = createContext<Context | undefined>(undefined);

export default function NewPostHandlera() {
  const [loading, setLoading] = useState<boolean>(false);
  const [toggleEditor, setToggleEditor] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const values = useMemo(
    () => ({
      loading,
      setLoading,
      progress,
      setProgress,
      toggleEditor,
      setToggleEditor,
    }),
    [loading, setLoading, toggleEditor, setToggleEditor, progress, setProgress]
  );

  return (
    <NewPostContext.Provider value={values}>
      <NewPostButton />
      {toggleEditor && <PostEditor />}
    </NewPostContext.Provider>
  );
}
