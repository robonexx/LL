'use client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/sanity/RichTextComponent';
import { PageType } from '@/sanity/types/Page';

export default function PageContent({ page }: { page: PageType }) {
  console.log('from page content: ', page?.content);
  return (
    <main className='relative h-full w-full border-gray-500 rounded-xs p-10 md:p-20 transition shadow-lg'>
      <header className='text-center'>
        <h1 className='text-3xl md:text-5xl drop-shadow-lg text-black font-extrabold pb-16'>
          {page?.title}
        </h1>
      </header>
      {page.image ? (
        <div className='w-full lg:w-full h-[380px] md:h-[460px] relative mx-auto rounded-xl shadow-lg mb-16'>
          <Image
            className='w-full h-full object-cover object-center rounded-xl shadow-lg'
            src={page.image}
            alt={page.title}
            fill
            priority
            sizes='(max-width: 960px), 100svw, 580px'
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className='relative text-lg text-gray-700 mt-5 text-justify lg:px-40'>
        <PortableText value={page?.content} components={RichTextComponents} />
      </div>
    </main>
  );
}
