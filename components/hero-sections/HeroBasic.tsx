import React from 'react';

interface HeroWithTextProps {
  headline: string;
  subheadline: string;
  text: string;
}

const HeroBasic: React.FC<HeroWithTextProps> = ({
  headline,
  subheadline,
  text,
}) => {
  return (
    <div className='px-0 pb-64 max-w-screen-sm lg:max-w-screen-lg'>
      <h1 className='text-5xl mb-16 font-bold'>{headline}</h1>
      <h2 className='text-4xl mb-2 font-semibold'>{subheadline}</h2>
      <p className='text-base lg:text-lg font-normal'>{text}</p>
    </div>
  );
};

export default HeroBasic;
