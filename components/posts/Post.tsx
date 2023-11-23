'use client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { PostType } from '@/sanity/types/Post';
import { RichTextComponents } from '@/sanity/RichTextComponent';

export default function Post({ post }: { post: PostType }) {
  console.log(post);
  return (
    <article className='relative h-full w-full md:w-2/3 border-gray-500 rounded-xs p-10 transition shadow-lg'>
      <header className='text-center'>
        <h1 className='font-outline-2 hover:font-outline-4 text-3xl md:text-5xl drop-shadow text-transparent font-extrabold pb-16'>
          {post?.title}
        </h1>
      </header>
      <div className='w-full lg:w-2/3 h-[280px] md:h-[360px] relative mx-auto'>
        <Image
          className='w-full h-full rounded-lg object-cover object-center'
          src={post.image}
          alt={post.title}
          /* width={400}
          height={368} */
          fill
          priority
          /* sizes='(max-width: 960px), 100svw, 480px' */
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
