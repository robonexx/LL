'use client'
import { useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@iconify/react';

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='max-w-md'>
      <input
        id='expandCollapse'
        checked={open}
        type='checkbox'
        className='peer sr-only'
      />
      <label
        htmlFor='expandCollapse'
        className={classNames(
          'w-full flex items-center justify-between bg-blue-100',
          'hover:bg-blue-500',
          'transition-colors duration-1000 ease-in-out'
        )}
        onClick={() => setOpen(!open)}
      >
      Title  {/* {open ? 'Less information' : 'More information'} */}
        <Icon
          icon='lucide:chevron-down'
          height='24'
          width='24'
          className={classNames('ml-4', {
            'rotate-180': open,
          })}
        />
      </label>
      <div
        className={classNames(
          'overflow-hidden h-0 bg-slate-300',
          'peer-checked:h-[200px] peer-checked:overflow-scroll ',
          'transition-[height] duration-1000 ease-in-out '
        )}
      >
        <p className='text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
        </p>
      </div>
    </div>
  );
};

export default Accordion ;
