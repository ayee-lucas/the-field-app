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
      console.log('User entered the website');
      if (id && isPageVisible) {
        const response = await userEntered(id);
        console.log(response);
      } else {
        console.log('User id is undefined');
      }
    };

    const handleUserExit = async () => {
      // Perform actions when the user leaves the website
      if (id && isPageVisible) {
        console.log('User left the website');
        const response = await userExit(id);
        console.log(response);
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

  return <div>{children}</div>;
};

export default CheckUserOnline;
