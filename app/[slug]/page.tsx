import { getBlog } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {blog.name}
        </h1>
      </header>

      <div className='text-lg text-gray-700 mt-5 text-center'>
        <PortableText value={blog.content} />
      </div>
      <div>
        <Image
          src={blog.image}
          alt={blog.name}
          width={400}
          height={400}
          className='m-auto mt-10 border-2 border-gray-700 object-cover rounded-xl'
        />
      </div>
    </div>
  );
}
