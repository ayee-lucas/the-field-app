'use client';

import {
  FC, ReactNode, useState, useEffect,
} from 'react';

interface Props {
  children: ReactNode;
}

const DarkMode: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <div>{children}</div>;
};

export default DarkMode;
