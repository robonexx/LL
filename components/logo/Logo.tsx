import React from 'react';
import Image from 'next/image';
import IMG from '@/public/ll-logo-min.png';

const Logo = (props: any) => {
  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover px-2'
        height={48}
        width={48}
        alt='logo'
        src={IMG}
      />
      {props.children}
    </div>
  );
};

export default Logo;
