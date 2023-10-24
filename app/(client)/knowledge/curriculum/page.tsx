'use client';
import React, { useState } from 'react';
import QA from '@/components/accordion/Qa';
import { stepsData } from '@/constants/stepsData';
import SearchQa from '@/components/accordion/searchQa';

const Curriculum = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    setSearchQuery(query);
  };

  const filteredStepsData =
    searchQuery &&
    stepsData.filter((item) => item.name.toLowerCase().includes(searchQuery));

  return (
    <div className='px-32 pt-32 flex flex-col items-center'>
      <h2 className='text-5xl text-[#005A9C] drop-shadow-lg capitalize font-semibold'>
        The steps and moves of locking!
      </h2>
      <SearchQa onSearch={handleSearch} />
      <section className='w-full lg:w-1/2 self-center p-4'>
        {filteredStepsData ? (
          filteredStepsData.map(({ id, name, desc, creator }, index) => (
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
          ))
        ) : (
          <div className='px-32 pt-32 flex flex-col items-center'></div>
        )}
      </section>
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
