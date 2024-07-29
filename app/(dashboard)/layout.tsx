import Header from "@/components/Header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={`px-3 lg:px-14`}>{children}</main>
    </>
  );
}
