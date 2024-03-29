'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import {
  userEntered,
  userExit,
} from '@/app/server-actions/user-status/actions';
import { Session } from '../types/sessionType';

interface Props {
  children: ReactNode;
  session: Session;
}

const CheckUserOnline: FC<Props> = ({ children, session }) => {
  const id = session?.user?.sub.toString();
  const [isPageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const handleUserEntrance = async () => {
      // Perform actions when the user enters the website
      if (id && isPageVisible) {
        await userEntered(id);
      }
    };

    const handleUserExit = async () => {
      // Perform actions when the user leaves the website
      if (id && isPageVisible) {
        await userExit(id);
      }
    };

    const handleVisibilityChange = () => {
      // Update page visibility state when visibility changes
      setPageVisible(!document.hidden);
    };

    const handleBeforeUnload = async () => {
      // Call the user exit action when the page is being unloaded
      await handleUserExit();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Perform user entrance action when the component mounts
    handleUserEntrance();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);

      // Call the user exit action when the component unmounts
      handleUserExit();
    };
  }, [id, isPageVisible]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default CheckUserOnline;
