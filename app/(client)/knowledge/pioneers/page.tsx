import React from 'react'
import HallOfFame from './_components/HallOfFame'
import Headline from '@/components/headline/Headline'

const page = () => {
  return (
    <div className='flex flex-col md:mt-16 px-8 md:px-20'>
     <Headline title='Hall of Fame'/>
      <HallOfFame />
      </div>
  )
}

export default page