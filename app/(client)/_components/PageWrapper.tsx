import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex flex-col flex-grow'>
      {children}
    </div>
  );
}
