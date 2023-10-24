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
      className='w-full h-full p-4 my-8'
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: isAccordionOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className='w-full flex items-center justify-between px-2 py-1 border-none rounded-md text-lg cursor-pointer bg-gray-200 hover:bg-gray-300 hover:shadow-md transition-all duration-300'
        onClick={handleToggle}
      >
        {name}
        <span>
          {isAccordionOpen ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
        </span>
      </button>
      {isAccordionOpen && (
        <motion.div
          className=' bg-gray-700 text-[#d8d8d8] p-2 text-lg transition-all duration-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
