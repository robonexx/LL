'use client';
import React, { useState } from 'react';
import QA from '@/components/accordion/Qa';
import { stepsData } from '@/constants/stepsData';
import SearchQa from '@/components/accordion/searchQa';
import Headline from '@/components/headline/Headline';

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
      <Headline title='The steps and moves of locking!'/>
      <SearchQa onSearch={handleSearch} />
      <section className='w-full lg:w-1/2 self-center p-4 transition-all duration-300'>
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
          <div className='px-32 pt-0 flex flex-col items-center'></div>
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
