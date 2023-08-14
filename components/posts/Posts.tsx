import { Post } from '@/sanity/types/Post';
import Link from 'next/link';
import Image from 'next/image';
/* import type { SanityDocument } from "@sanity/client"; */

export default function Posts({ posts = [] }: { posts: Post[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  console.log(posts);

  return (
    <main className='container mx-auto grid grid-cols-1'>
      <h1 className='text-2xl p-4 font-bold'>{title}</h1>
      <section className='group m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
      </section>
    </main>
  );
}
