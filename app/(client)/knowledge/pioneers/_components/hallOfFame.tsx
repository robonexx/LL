'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { lockersData } from '@/constants/lockersData';
import styles from '../../styles/components/Hof.module.scss';

const HallOfFame = () => {
  return (
    <div className='w-full h-full select-none'>
      {lockersData.map(({ name, description, aka, id, img }, i) => (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.4, duration: 0.3 }}
          className='flex flex-col xl:flex-row'
          id={id}
          key={id}
        >
          <div className='flex justify-start items-start flex-col p-5 md:p-8 font-bold '>
            <h2 className='text-body text-shadow text-lg md:text-2xl'>
              {name}
            </h2>
            <div className='relative w-[380px] h-[300px] md:w-[280px] md:h-[280px] rounded-xl'>
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
            <h1 className='text-body font-bold text-lg md:text-xl'>{aka}</h1>
            <div className='mt-2 text-base'>{description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HallOfFame;
