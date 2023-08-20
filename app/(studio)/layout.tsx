import '../globals.css';

export const metadata = {
  title: 'LockerLegends',
  description: 'LockerLegends official website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
