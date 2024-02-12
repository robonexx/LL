import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import HofSidebar from './_components/HofSidebar';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LockerLegends 2024',
  description: 'Official website of lockerlegends international',
};

export default function HOFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <aside className={`${roboto.className}`}>
        <div className='flex max-w-screen'>
          <HofSidebar />
          
              {children}
        
        </div>
      </aside>
  );
}
