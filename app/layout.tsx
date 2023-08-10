import { Toaster } from '@/components/ui/toaster';
import CheckUserOnline from './Providers/CheckUserOnline';
import Provider from './Providers/Provider';
import { ThemeProvider } from './Providers/ThemeProvider';

import './globals.css';
import { getGoSession } from './tools/getGoServerSession';

export const metadata = {
  title: 'The Field',
  description: 'Project',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getGoSession();
  return (
    <html lang="en">
      <body className=" dark:bg-black scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-600">
        <Provider>
          {session ? (
            <CheckUserOnline session={session}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
              </ThemeProvider>
            </CheckUserOnline>
          ) : (
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          )}
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
