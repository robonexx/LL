import { getPost } from '@/sanity/sanity-utils';
import { draftMode } from 'next/headers';
import Post from '@/components/posts/Post';
import { PostType } from '@/sanity/types/Post';
import PreviewProvider from '@/components/previewprovider/PreviewProvider';
import PreviewPost from '@/components/previewpost/PreviewPost';
import { cachedClient } from '@/lib/sanity.client';
import { postPathsQuery, postQuery } from '@/lib/sanity.queries';
import { getCachedClient } from '@/lib/getClient';

type Props = {
  params: { slug: string };
};

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

export default async function postPage({ params }: Props) {
  const slug = params.slug;
  const post = await getPost(slug);

  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const postpreview = await getCachedClient(preview)<PostType>(
    postQuery,
    params
  );

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPost post={postpreview} />
      </PreviewProvider>
    );
  }

  return (
    <main className='flex items-center justify-center w-full h-full'>
      <Post post={post} />
    </main>
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
