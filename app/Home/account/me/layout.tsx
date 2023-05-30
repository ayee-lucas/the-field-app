import NavbarAccount from '@/app/components/Account/NavbarAccount';
import { roboto } from '@/app/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${roboto.variable} w-full h-full flex flex-col`}>
      <div>
        <NavbarAccount />
      </div>
      <div>{children}</div>
    </section>
  );
}
