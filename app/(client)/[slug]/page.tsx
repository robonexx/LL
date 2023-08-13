import { getPost } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export default async function post({ params }: Props) {
  const slug = params.slug;
  const post = await getPost(slug);

  return (
    <div className='p-20'>
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
          className='m-auto mt-10 border-2 border-gray-700 object-cover rounded-xl'
        />
      </div>
      <div className='text-lg text-gray-700 mt-5 text-justify px-20'>
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
