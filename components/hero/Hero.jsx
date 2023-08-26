import React from 'react';
import Image from 'next/image';
import { MOCK_DATA } from '@/assets/constants';
import Cta from '../cta/Cta';
// styles

import './hero.css';

const Hero = () => {
  const { title, subtitle, desc, heroImg } = MOCK_DATA;

  return (
    <div className='hero'>
      <div className='wrapper'>
        <div className='content'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{desc}</p>
        </div>
        <div className='buttonsWrapper'>
          <Cta title='Learn more' />
          <Cta title='Download app' />
        </div>
      </div>
      <div className='imageContainer'>
        <Image
          src={heroImg}
          fill
          alt='Picture of kids holding phones'
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
