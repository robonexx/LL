'use client';

import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PostType } from '@/sanity/types/Post';

export default function Post({ post }: { post: PostType }) {
  return (
    <main className='relative h-96 w-full border-2 border-gray-500 rounded-xs p-1 hover:scale-105 hover:border-blue-500 transition shadow-lg'>
      <header className='text-center'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {post?.title}
        </h1>
      </header>
      <div>
        <Image
          src={post?.image}
          alt={post?.title}
          width={400}
          height={400}
          /*  className='m-auto mt-10 border-2 border-gray-700 object-cover rounded-xl' */
          className='w-1/3 m-auto mt-5 rounded-lg md:float-left md:m-5 md:w-1/4'
        />
      </div>
      <div className='text-lg text-gray-700 mt-5 text-justify'>
        <PortableText value={post?.body} />
      </div>
    </main>
  );
}

/* 
if preview mode has issues try addin one of these

{post?.title ? <h1>{post.title}</h1> : <h1>Untitled</h1>}

{post?.title ? <h1>{post.title}</h1> : null}

*/
