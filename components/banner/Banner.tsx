import React from 'react';

const Banner = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center lg:space-x-5 px-10 py-5 mb-8'>
      <div className='text-black text-center md:text-left'>
      <h6 className=' md:mt-0 text-gray-800 font-semibold'>
          Welcome to{'  '}
          <span className='underline decoration-4 decoration-[#fa4b0a] font-semibold'>
            the official
          </span>{' '}
          website of the pioneers of locking
        </h6>
        <h1 className='pb-8 text-3xl md:text-5xl lg:text-7xl font-extrabold'>LOCKERLEGENDS </h1>
        
      </div>
      {/* <p className='mt-5 md:mt-2 w-full text-gray-800 text-center md:text-left'>
        Always bringing you new knowledge building the bridge between the old
        and new, sharing the truth of the artform locking
      </p> */}
    </div>
  );
};

export default Banner;
