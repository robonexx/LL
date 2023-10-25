'use client';
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/useScroll';
import { cn } from '@/utils/classnames';
import Logo from '@/components/logo/Logo';
import Button from '@/components/buttons/Button';

const Header = () => {
  const scrolled = useScroll(50);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 py-2 px-4 top-0 z-50 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/25 backdrop-blur-md': scrolled,
          'border-b border-gray-200 bg-transparent': selectedLayout,
        }
      )}
    >
      <div className='flex h-[47px] items-center justify-between px-4'>
        <div className='flex items-center space-x-4'>
          <Link
            href='/'
            className='flex flex-row space-x-3 items-center justify-center md:hidden'
          >
            <Logo />
            <span className=' font-bold text-xl flex '>LockerLegends</span>
          </Link>
        </div>

        <div className='hidden md:block'>
          <Button
            variant='primary'
            className='bg-[#ff6e40] hover:bg-orange-600 transition-colors duration-300'
          >
            <Link href='/contact'>Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
