'use client';

import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { useSession } from 'next-auth/react';
import { userEntered } from '../tools/onlineStatus';

interface Props {
  children: ReactNode;
}

const CheckUserOnline: FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const [id, setId] = useState<string | undefined>(session?.user?.id.toString());

  useEffect(() => {
    const handleUserEntrance = async () => {
      console.log(id);
      // Perform actions when the user enters the website
      console.log('User entered the website');
      const response = await userEntered(id);
      console.log(response);
    };

    const handleUserExit = () => {
      // Perform actions when the user leaves the website
      console.log('User left the website');
    };

    if (id) {
      handleUserEntrance();
    } else {
      const timer = setInterval(() => {
        const updatedId = session?.user?.id.toString();
        if (updatedId) {
          setId(updatedId);
          clearInterval(timer);
        }
      }, 1000);
    }

    window.addEventListener('load', handleUserEntrance);
    window.addEventListener('beforeunload', handleUserExit);

    return () => {
      window.removeEventListener('load', handleUserEntrance);
      window.removeEventListener('beforeunload', handleUserExit);
    };
  }, [id, session]);

  return <div>{children}</div>;
};

export default CheckUserOnline;
