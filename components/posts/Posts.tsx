import { PostType } from '@/sanity/types/Post';
import Link from 'next/link';
import Image from 'next/image';
/* import type { SanityDocument } from "@sanity/client"; */

export default function Posts({ posts = [] }: { posts: PostType[] }) {
  const heading = posts?.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <main className=' md:p-10 flex flex-col'>
      <h1 className='text-2xl p-4 font-bold'>{heading}</h1>
      <section className='group grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map(({ slug, _id, image, title, author, _createdAt }) => (
          <div
            key={_id}
            className='border-8 border-black relative w-full h-80 drop-shadow-xl md:group-hover:scale-105 transition-transform duration-300 ease-out cursor-pointer flex-col flex overflow-hidden py-10'
          >
            <Link href={`/${slug}`} className='w-full h-full'>
              {image && (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className='object-cover object-left lg:object-center hover:scale-110 transition-all duration-300'
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
                                {
                                    new Date(_createdAt).toLocaleDateString(
                                        "en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }
                                    )
                                }
                            </p>
                        </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
