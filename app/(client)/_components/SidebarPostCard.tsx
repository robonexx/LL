import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/sanity/types/Post';

const SidebarPostCard = ({
  slug,
  _id,
  image,
  title,
  author,
}: PostType) => {
  return (
    <Link
      href={`/post/${slug}`}
      key={_id}
      className='m-0 sm:m-4 border-none mb-10 sm:mb-0 relative w-full h-32 drop-shadow-xl md:group-hover:scale-105 transition-transform duration-300 ease-out cursor-pointer flex flex-col overflow-hidden rounded-xl shadow-lg'
    >
      <div className='w-full h-full'>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover scale-105 brightness-75'
          />
        )}
      </div>
      <div className='absolute bottom-0 left-0 py-1 px-2 w-full md:py-1 md:px-0 flex justify-between items-center'>
        <div className='absolute bottom-0 left-0 py-1 px-2 w-full h-12 flex flex-col items-left bg-[#eee]'>
          <p className='text-xs text-thin font-mono text-slate-800 relative drop-shadow-md'>
            Written by: {author.name}
          </p>
          <p className='text-clip text-xs overflow-hidden flex items-center z-10 rounded font-semibold text-zinc-800 drop-shadow-md'>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarPostCard;
