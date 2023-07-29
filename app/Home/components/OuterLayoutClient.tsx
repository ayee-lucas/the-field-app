'use client';

import { createContext, useMemo, useState } from 'react';
import { Session } from '@/app/types/sessionType';
import TopBar from './TopBar';
import NavDown from './NavDown';
import SideBar from './SideBar';

type Props = {
  session: Session;
};

type ContextType = {
  session: Session;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OuterLClientContext = createContext<ContextType | null>(null);

export default function OuterLayoutClient({ session }: Props) {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({ session, open, setOpen }),
    [session, open, setOpen]
  );

  return (
    <OuterLClientContext.Provider value={value}>
      <NavDown />
      <SideBar />
      <TopBar />
    </OuterLClientContext.Provider>
  );
}
