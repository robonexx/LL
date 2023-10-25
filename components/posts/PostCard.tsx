import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/sanity/types/Post';

const PostCard = ({
  slug,
  _id,
  image,
  title,
  author,
  _createdAt,
}: PostType) => {
  return (
    <Link
      href={`/${slug}`}
      key={_id}
      className='m-0 sm:m-4 border-none mb-10 sm:mb-0 relative w-full h-64 drop-shadow-xl md:group-hover:scale-105 transition-transform duration-300 ease-out cursor-pointer flex flex-col overflow-hidden rounded-xl shadow-lg'
    >
      <div className='w-full h-full'>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover scale-105 hover:scale-110 transition-all duration-300 brightness-75'
          />
        )}
      </div>
      <div className='absolute bottom-0 left-0 py-1 px-2 w-full md:max-h-15 md:py-1 md:px-0 flex justify-between items-center'>
        <div className='absolute bottom-0 left-0 py-4 px-2 w-full md:max-h-15 flex flex-col items-left bg-[#eee]'>
          <p className='text-xs text-thin font-mono text-slate-800 relative drop-shadow-md'>
            Written by: {author.name}
          </p>
          <p className='text-clip overflow-hidden max-w-3/4 flex items-center z-10 rounded font-semibold md:font-bold lg:font-extrabold text-zinc-800 drop-shadow-md'>
            {title}
          </p>
          <div>
            <p className='text-gray-400 drop-shadow-md font-mono'>
              {new Date(_createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
