'use client';
import React from 'react';
import { Link } from 'sanity/router';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

const StudioNavbar = (props: any) => {
  const { renderDefault } = props;
  const router = useRouter()
  return (
    <div>
      <button  className='flex items-center p-4 text-white' onClick={() => router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`)}>
        <ArrowUturnLeftIcon className='h-4 w-4 fill-white mr-2' /> Back to
        website
      </button>

      <>{renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
