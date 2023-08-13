import Image from 'next/image';
import Link from 'next/link';
import { Audiowide } from 'next/font/google';
import { getPosts } from '@/sanity/sanity-utils';

const audiowide = Audiowide({ subsets: ['latin-ext'], weight: '400' });

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div>
        <h2 className='mt-24 font-bold text-gray-700 text-3xl'>
          Latest Editorials
        </h2>

        <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center'>
          {posts.map(({ slug, _id, image, title, author }) => (
            <>
              <div className='flex flex-col max-h-30 justify-center items-center'>
                <Link
                  href={`/${slug}`}
                  key={_id}
                  className='rounded p-4 hover:scale-105 hover:border-blue-500 relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] shadow bg-slate-900 transition-all ease-in-out'
                >
                  {image && (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className='object-cover relative gap-4 rounded border border-gray-500'
                    />
                  )}
                </Link>
                <p className='text-xs text-thin font-mono text-black'>
                  Written by: {author.name}
                </p>
                <div className='flex items-center z-10 rounded mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-indigo-500 to-red-600 bg-clip-text text-transparent shadow-lg p-2'>
                  {title}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
