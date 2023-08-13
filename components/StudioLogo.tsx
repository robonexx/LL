import React from 'react';
import Image from 'next/image';
import IMG from '@/public/ll-logo-min.png';

const StudioLogo = (props: any) => {
  const { renderDefault } = props;
  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        height={48}
        width={48}
        alt='logo'
        src={IMG}
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default StudioLogo;
