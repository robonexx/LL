'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { lockersData } from '@/constants/lockersData';

const HallOfFame = () => {
  return (
    <div className='w-full h-full select-none mt-10 lg:mt-20'>
      {lockersData.map(({ name, description, aka, id, img }, i) => (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.4, duration: 0.3 }}
          className='flex flex-col xl:flex-row lg:py-10'
          id={id}
          key={id}
        >
          <div className='flex justify-start items-start flex-col p-5 md:p-8 font-bold '>
            <h2 className='text-body text-shadow text-lg md:text-2xl leading-loose my-4'>
              {name}
            </h2>
            <div className='relative w-full h-[380px] md:w-[280px] md:h-[280px] rounded-xl shadow-md'>
              <Image
                src={img}
                priority
                fill
                className='object-cover object-center rounded-xl'
                alt={`image of ${name}`}
              />
            </div>
          </div>

          <div className='max-w-800 p-8 md:p-6 md:max-w-full align-center relative lg:self-center'>
            <h2 className='text-body font-bold text-lg md:text-xl'>{aka}</h2>
            <p className='mt-2 text-base leading-loose'>{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HallOfFame;
