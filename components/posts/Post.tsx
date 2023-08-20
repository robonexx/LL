'use client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { PostType } from '@/sanity/types/Post';
import { RichTextComponents } from '@/sanity/RichTextComponent';

export default function Post({ post }: { post: PostType }) {
  return (
    <article className='relative h-full w-full md:w-2/3 border-gray-500 rounded-xs p-10 transition shadow-lg'>
      <header className='text-center'>
        <h1 className='bg-gradient-to-r from-orange-400 via-orange-800 to-indigo-400 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {post?.title}
        </h1>
      </header>
      <div className='w-full h-64 md:w-64 md:h-64 lg:w-96 lg:h-72 relative md:float-left md:m-5 '>
        <Image
          src={post?.image}
          alt={post?.title}
          /* width={400}
          height={368} */
          fill
          priority
          sizes='(max-width: 960px), 100svw, 480px'
          /*  className='m-auto mt-10 border-2 border-gray-700 object-cover rounded-xl' */
          className='w-1/3 m-auto rounded-lg  d:m-5 md:w-1/4'
        />
      </div>
      <div className='text-lg text-gray-700 mt-5 text-justify'>
        <PortableText value={post?.body} components={RichTextComponents} />
      </div>
    </article>
  );
}

/* 
if preview mode has issues try addin one of these

{post?.title ? <h1>{post.title}</h1> : <h1>Untitled</h1>}

{post?.title ? <h1>{post.title}</h1> : null}

*/
