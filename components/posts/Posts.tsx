import { PostType } from '@/sanity/types/Post';
import Link from 'next/link';
import Image from 'next/image';
/* import type { SanityDocument } from "@sanity/client"; */

export default function Posts({ posts = [] }: { posts: PostType[] }) {
  const heading = posts?.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className='max-w-full min-h-full overflow-hidden grid place-content-center'>
      <h2 className='p-4 font-bold text-gray-700 text-3xl'>
        Latest Editorials
      </h2>
      <h3 className='text-2xl p-4 font-bold'>{heading}</h3>
      <section className='w-full h-full group grid md:grid-cols-2 lg:grid-cols-3 gap-15'>
        {posts.map(({ slug, _id, image, title, author, _createdAt }) => (
          <div
            key={_id}
            className='m-0 sm:m-4 border-none mb-10 sm:mb-0 relative w-96 h-64 drop-shadow-xl md:group-hover:scale-105 transition-transform duration-300 ease-out cursor-pointer flex-col flex overflow-hidden py-10
            gap-10 md:gap-15'
          >
            <Link href={`/${slug}`} className='w-full h-full'>
              {image && (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className='object-cover hover:scale-110 transition-all duration-300'
                />
              )}
            </Link>
            <div className='absolute bottom-0 left-0 bg-black py-1 px-2 w-full md:max-h-15 md:py-1 md:px-0 flex justify-between items-center'>
              <div className='absolute bottom-0 left-0 bg-black py-1 px-2 w-full md:max-h-15 md:py-1 md:px-0 flex flex-col items-left'>
                <p className='text-xs text-thin font-mono text-white relative'>
                  Written by: {author.name}
                </p>
                <p className='flex items-center z-10 rounded font-semibold md:font-bold lg:font-extrabold bg-gradient-to-r from-orange-400 via-indigo-500 to-red-600 bg-clip-text text-transparent'>
                  {title}
                </p>
                <div>
                  <p>
                    {new Date(_createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
