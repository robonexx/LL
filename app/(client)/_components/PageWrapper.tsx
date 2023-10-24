import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex flex-colbg-zinc-100 flex-grow'>
      {children}
    </div>
  );
}
