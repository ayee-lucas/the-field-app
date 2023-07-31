import AboutNavBar from './components/AboutNavBar';

export default async function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AboutNavBar />
      {children}
    </>
  );
}
