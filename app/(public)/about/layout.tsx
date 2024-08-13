export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <h1 className="text-xl">Soy layout de About</h1>
      {children}
      </>
  );
}


