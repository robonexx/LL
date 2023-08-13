import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Banner from '@/components/banner/Banner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LockerLegends 2024',
  description: 'Official website of lockerlegends international',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
