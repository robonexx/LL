import React from 'react';

const Banner = () => {
  return (
    <div className='p-2 flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10'>
      <div className='text-black'>
        <h1 className='text-5xl md:text-7xl font-extrabold'>
          THE LOCKERLEGENDS{' '}
        </h1>
        <h2 className='mt-5 md:mt-0 text-gray-800'>
          Welcome to{'  '}
          <span className='underline decoration-4 decoration-[#fa4b0a] font-semibold'>
            every LOCKERS
          </span>{' '}
          first website of knowledge
        </h2>
      </div>
      <p className='mt-5 md:mt-2 max-w-sm text-gray-800'>
        Always bringing you new knowledge building the bridge between the old
        and new, sharing the truth of the artform locking
      </p>
    </div>
  );
};

export default Banner;
