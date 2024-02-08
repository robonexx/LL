import React, { useState } from 'react';
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface QAProps {
  name: string;
  desc: string;
  creator?: string;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const QA: React.FC<QAProps> = ({
  name,
  desc,
  creator,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isAccordionOpen = index === activeIndex;

  const handleToggle = () => {
    setActiveIndex(isAccordionOpen ? -1 : index);
  };

  return (
    <motion.div
      className='w-full h-full py-4 my-8'
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: isAccordionOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className={`w-full flex items-center justify-between px-8 border-none text-lg cursor-pointer
        shadow-[inset_0_0_0_2px_#ff6e40] text-neutral-600 hover:text-white hover:shadow-[inset_0_0_0_2px_#ff6e40] hover:bg-[#ff6e40] transition-all duration-300 drop-shadow-lg ${
          isAccordionOpen ? 'rounded-t-md py-3' : 'rounded-md py-8'
        }`}
        onClick={handleToggle}
      >
        {name}
        <span>
          {isAccordionOpen ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
        </span>
      </button>
      {isAccordionOpen && (
        <motion.div
          className='bg-gray-700 text-[#d8d8d8] py-2 px-8 text-lg transition-all duration-300 drop-shadow-lg rounded-b-md'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <p>{desc}</p>
          {creator && (
            <p className='py-2 text-white font-mono'>
              <span className='text-gray-400'>Created by: </span>
              {creator}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default QA;
