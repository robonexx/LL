'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { lockersData } from '@/constants/lockersData';
import { Icon } from '@iconify/react';

const HofSidebar = () => {
  return (
    <div className='fixed left-0 top-0 w-64 h-full border-r bg-[#f8f8f8] border-white pt-20 z-10'>
      <Link
        href='/'
        className='absolute top-2 left-12 drop-shadow-md cursor-pointer bg-[#ff6e40] rounded-full py-3 px-3 grid place-content-center hover:bg-orange-600'
      >
        <Icon icon='lucide:home' color="#737fee" width='32' height='32' className='mb-[2px] ml-[2px]' />
      </Link>
      <ul className='h-full p-0 overflow-y-scroll pb-24'>
        {lockersData.map(({ id, name, href }, i) => (
          <motion.li
            key={id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.2 }}
            className='border-t border-gray-300 list-none relative w-full hover:bg-gray-200'
          >
            <a
              href={href}
              className='block px-6 py-3 text-client-1 no-underline cursor-pointer font-thin text-base'
            >
              {name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default HofSidebar;
