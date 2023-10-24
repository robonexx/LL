import '../globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from './_components/Header';
import HeaderMobile from './_components/Header-mobile';
import Banner from '@/components/banner/Banner';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin']
});

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
      <body className={`${roboto.className}`}>
        <Header />
        <HeaderMobile />
        <Banner />
        {children}
      </body>
    </html>
  );
}
