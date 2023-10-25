// Headline.tsx
import React from 'react';

interface HeadlineProps {
  title: string;
}

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  return (
    <h1 className="text-black text-3xl md:text-5xl px-20 py-8 font-semibold">
      {title}
    </h1>
  );
};

export default Headline;
