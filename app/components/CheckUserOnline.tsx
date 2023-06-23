'use client';

import {
  FC, ReactNode, useEffect,
} from 'react';
import { useSession } from 'next-auth/react';
import { userEntered, userExit } from '../tools/onlineStatus';

interface Props {
  children: ReactNode;
}

const CheckUserOnline: FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  // const [id, setId] = useState<string | undefined>(session?.user?.id.toString());
  const id = session?.user?.id.toString();

  useEffect(() => {
    const handleUserEntrance = async () => {
      console.log(id);
      // Perform actions when the user enters the website
      console.log('User entered the website');
      if (id) {
        const response = await userEntered(id);
        console.log(response);
      } else {
        console.log('User id is undefined');
      }
    };

    const handleUserExit = async () => {
      // Perform actions when the user leaves the website
      console.log('User left the website');
      if (id) {
        const response = await userExit(id);
        console.log(response);
      } else {
        console.log('User id is undefined');
      }
    };
    window.addEventListener('load', handleUserEntrance);
    window.addEventListener('beforeunload', handleUserExit);

    return () => {
      window.removeEventListener('load', handleUserEntrance);
      window.removeEventListener('beforeunload', handleUserExit);
    };
  }, [id]);

  return <div>{children}</div>;
};

export default CheckUserOnline;
