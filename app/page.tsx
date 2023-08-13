import Image from 'next/image';
import Link from 'next/link';
import { Audiowide } from 'next/font/google';
import { getBlogs } from '@/sanity/sanity-utils';

const audiowide = Audiowide({ subsets: ['latin-ext'], weight: '400' });


export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div>
        <h1 className='text-3xl md:text-6xl font-extrabold'>
          Welcome to
          <span
            className={`bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent ${audiowide.className}`}
          >
            {' '}
            LockerLegends International <span className='text-xs text-slate-800'>Edition 2024</span>
          </span>
        </h1>
        <p className='mt-3 text-l text-gray-400'>
          Hello everyone! We are happy to have you here with us! :D
        </p>
        <h2 className='mt-24 font-bold text-gray-700 text-3xl'>Latest Editorials</h2>

        <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center'>
          {blogs.map((blog) => (
            <Link
              href={`/${blog.slug}`}
              key={blog._id}
              className='rounded p-4 hover:scale-105 hover:border-blue-500 transition relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] shadow bg-slate-900'
            >
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.name}
                  fill
                  className='object-cover relative gap-4 rounded border border-gray-500'
                />
              )}
              <div className='z-10 absolute bottom-2 rounded mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-indigo-500 to-red-600 bg-clip-text text-transparent shadow-lg p-2'>
                {blog.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
