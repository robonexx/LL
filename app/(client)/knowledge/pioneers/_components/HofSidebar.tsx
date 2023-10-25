'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { lockersData } from '@/constants/lockersData';


const HofSidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-full border-r bg-[#f8f8f8] border-white pt-16 z-10">
      <ul className="h-full p-0 overflow-y-scroll pb-24">
        {lockersData.map(({ id, name, href }, i) => (
          <motion.li
            key={id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.2 }}
            className="border-t border-gray-300 list-none relative w-full hover:bg-gray-200"
          >
            <a href={href} className="block px-6 py-3 text-client-1 no-underline cursor-pointer font-thin text-base">
              {name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default HofSidebar
