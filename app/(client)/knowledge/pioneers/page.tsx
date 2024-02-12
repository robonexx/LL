import React from 'react';
import Headline from '@/components/headline/Headline';
import HallOfFame from './_components/hallOfFame';

const Curriculum = () => {
  return (
    <div className='flex flex-col mt-32 md:mt-20 px-8 md:px-20 text-base'>
      <Headline title='Hall of Fame' />
      <HallOfFame />
    </div>
  );
};

export default Curriculum;
