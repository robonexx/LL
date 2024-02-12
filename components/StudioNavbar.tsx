'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => {
  const { renderDefault } = props;
  const router = useRouter()
  return (
    <div>
      <button  className='flex items-center p-4 text-white'onClick={() => router.push('/')} >
        <ArrowUturnLeftIcon className='h-4 w-4 fill-white mr-2' /> Back to
        website
      </button>

      <>{renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
