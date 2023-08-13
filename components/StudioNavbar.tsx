'use client';
import React from 'react';
import { Link } from 'sanity/router';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => {
  const { renderDefault } = props;
  return (
    <div>
      <Link href='/' className='flex items-center p-4 text-white'>
        <ArrowUturnLeftIcon className='h-4 w-4 fill-white mr-2' /> Back to
        website
      </Link>

      <>{renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
