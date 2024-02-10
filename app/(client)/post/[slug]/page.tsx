import { SanityDocument } from '@sanity/client';
import { getPost, postPathsQuery } from '@/sanity/lib/quaries';
import { draftMode } from 'next/headers';
import Post from '@/components/posts/Post';
import { PostType } from '@/sanity/types/Post';
import PreviewProvider from '@/components/previewprovider/PreviewProvider';
import PreviewPost from '@/components/previewpost/PreviewPost';
import { client } from '@/sanity/lib/client';
import { getCachedClient } from '@/lib/getClient';
import { sanityFetch } from '@/sanity/lib/fetch';
import AltPost from '@/components/posts/AltPost';

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function postPage({ params }: Props) {
  const post = await sanityFetch<PostType>({ query: getPost, params });

  console.log('post from post ', post);

  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const postpreview = await getCachedClient(preview)<PostType>(getPost, params);

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPost post={postpreview} />
      </PreviewProvider>
    );
  }

  return (
    <section className='flex items-center justify-center w-full h-full'>
      <AltPost post={post} />
    </section>

    /*  <Post post={post} /> */
    /*  <div className='p-20 container mx-auto prose prose-lg'>
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
          className='float-left w-1/3 m-5 rounded-lg'
        />
      </div>
      <div className='text-lg text-gray-700 mt-5 text-justify px-20'>
        <PortableText value={post.body} />
      </div>
    </div> */
  );
}
