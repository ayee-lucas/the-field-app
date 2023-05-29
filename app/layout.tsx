import DarkMode from "./components/DarkMode";
import Provider from "./components/Provider";
import { inter } from "./fonts";

import "./globals.css";

export const metadata = {
  title: "The Field",
  description: "Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Provider>{children}</Provider>
      </body>
    </html>
  );
}
