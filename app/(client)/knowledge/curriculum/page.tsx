'use client';
import React, { useState } from 'react';
import QA from '@/components/accordion/Qa';
import { stepsData } from '@/constants/stepsData';

const Curriculum = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <div className='px-32 pt-32 flex flex-col items-center'>
      <h2 className='text-5xl text-[#005A9C] drop-shadow-lg'>FAQ or Q&A component</h2>
      <section className='w-full lg:w-1/2 self-center p-4'>
        {stepsData.map(({ id, name, desc, creator }, index) => (
          <div key={id}>
            <QA
              name={name}
              desc={desc}
              creator={creator}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Curriculum;
