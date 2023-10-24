import { Audiowide } from 'next/font/google';
import { getPosts } from '@/sanity/sanity-utils';
import Posts from '@/components/posts/Posts';
import { draftMode } from 'next/headers';
import { getCachedClient } from '@/lib/getClient';
import { postsQuery } from '@/lib/sanity.queries';

// preview
import PreviewPosts from '@/components/previewposts/PreviewPosts';
import PreviewProvider from '@/components/previewprovider/PreviewProvider';
import Hero from './_components/Hero';

const audiowide = Audiowide({ subsets: ['latin-ext'], weight: '400' });

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const posts = await getPosts();

  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const Prevposts = await getCachedClient(preview)(postsQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPosts posts={Prevposts} />
      </PreviewProvider>
    );
  }

  return (
    <main className='w-full min-h-full flex flex-col'>
      <div>
        <>
          <Hero />
          {/*  <Posts posts={posts} /> */}
          {/*  {posts.map(({ slug, _id, image, title, author }) => (
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
          ))} */}
          <section className='h-screen bg-gray-300 py-4 border-red-300'></section>
          <section className='h-screen bg-gray-300 py-4 border-red-300'></section>
          <section className='h-screen bg-gray-300 py-4 border-red-300'></section>
        </>
      </div>
    </main>
  );
}
