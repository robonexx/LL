'use client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PostType } from '@/sanity/types/Post';
import { RichTextComponents } from '@/sanity/RichTextComponent';
import { urlForImage } from '@/lib/sanity.image';

export default function Post({ post }: { post: PostType }) {
  return (
    <article className='relative h-full w-full border-gray-500 rounded-xs p-10 md:p-20 transition shadow-lg'>
      <header className='text-center'>
        <h1 className='text-3xl md:text-5xl drop-shadow-lg text-black font-extrabold pb-16'>
          {post?.title}
        </h1>
      </header>
      <div className='w-full lg:w-full h-[380px] md:h-[460px] relative mx-auto rounded-xl shadow-lg mb-16'>
        <Image
          className='w-full h-full object-cover object-center rounded-xl shadow-lg'
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes='(max-width: 960px), 100svw, 580px'
        />
      </div>
      <div className='relative text-lg text-gray-700 mt-5 text-justify lg:px-40'>
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
