'use client';

import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PostType } from '@/sanity/types/Post';

export default function Post({ post }: { post: PostType }) {
  return (
    <main className='p-10 container mx-auto prose prose-lg'>
      <header className='text-center'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {post.title}
        </h1>
      </header>
      <div>
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          /*  className='m-auto mt-10 border-2 border-gray-700 object-cover rounded-xl' */
          className='float-left w-1/3 m-5 rounded-lg'
        />
      </div>
      <div className='text-lg text-gray-700 mt-5 text-justify px-20'>
        <PortableText value={post.body} />
      </div>
    </main>
  );
}
