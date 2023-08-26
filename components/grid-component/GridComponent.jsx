import React from 'react';
import './GridComponent.css';
import Cta from '../cta/Cta';

const GridComponent = () => {
  return (
    <div className='gridWrapper'>
      <section className='top'>
        <h2>
          Take control<span>(Fillin Control)</span>
        </h2>
        <h5>Try for 30day, money back guarantee</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          nisi.
        </p>
      </section>
      <section className='bottom-left'>
        <h2>Monthly subscription</h2>
        <p>
          <span>$9.99</span>per month
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          molestiae beatae unde dolorum nihil alias voluptatum, quibusdam iste
          eos cumque.
        </p>
        <Cta title='Buy now' />
      </section>
      <section className='bottom-right'>
        <h2>Yearly subscription</h2>
        <p>
          <span>$79.99</span>per year
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
          omnis pariatur veritatis illum fuga eligendi alias commodi
          consequuntur facere sequi.
        </p>
      </section>
    </div>
  );
};

export default GridComponent;
