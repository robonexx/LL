// Headline.tsx
import React from 'react';

interface HeadlineProps {
  title: string;
}

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  return (
    <h1 className=" text-3xl px-20 md:text-5xl py-8 font-semibold">
      {title}
    </h1>
  );
};

export default Headline;
