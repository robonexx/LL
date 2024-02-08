'use client';
import React, { useState, useEffect, useRef } from 'react';
import QA from '@/components/accordion/Qa';
import { stepsData } from '@/constants/stepsData';
import SearchQa from '@/components/accordion/searchQa';
import Headline from '@/components/headline/Headline';

const Curriculum = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const accordionRef = useRef<HTMLDivElement>(null);
  const [filteredStepsData, setFilteredStepsData] = useState<any[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

   useEffect(() => {
    const filteredData =
      searchQuery &&
      stepsData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setFilteredStepsData(filteredData || []);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className='px-8 pt-32  lg:px-32 flex flex-col items-center max-w-5xl'>
      <Headline title='The steps and moves of locking!' />
      <SearchQa onSearch={handleSearch} />
      <section
        className='w-full lg:max-w-4xl self-center p-4 transition-all duration-300 grid grid-cols-1 gap-8 md:grid-cols-2'
        ref={accordionRef}
      >
        {(filteredStepsData && filteredStepsData.length > 0 ? filteredStepsData : stepsData).map(({ id, name, desc, creator }, index) => (
          <QA
            key={id}
            name={name}
            desc={desc}
            creator={creator}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </section>
    </div>
  );
};

export default Curriculum;
