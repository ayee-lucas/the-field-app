import Provider from './components/Provider';
import { inter } from './fonts';

import './globals.css';

export const metadata = {
  title: 'The Field',
  description: 'Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-black scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-600 ">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
