import '../globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from './_components/Header';
import HeaderMobile from './_components/Header-mobile';
import PageLayoutWrapper from './_components/PageLayoutWrapper';
import Sidebar from './_components/Sidebar';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LockerLegends 2024',
  description: 'Official website of lockerlegends international',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className}`}>
        <div className='flex max-w-screen'>
          <Sidebar />
          <div className='flex-1'>
            <PageLayoutWrapper>
              {<Header />}
              {<HeaderMobile />}

              {children}
            </PageLayoutWrapper>
          </div>
        </div>
      </body>
    </html>
  );
}
