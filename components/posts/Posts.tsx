import { PostType } from '@/sanity/types/Post';
import Link from 'next/link';
import Image from 'next/image';
import PostCard from './PostCard';

export default function Posts({ posts = [] }: { posts: PostType[] }) {
  const heading = posts?.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className='relative max-w-full min-h-full overflow-hidden grid place-content-center'>
      <h2 className='p-4 font-bold text-gray-700 text-3xl'>
        Read latest
      </h2>
      <h3 className='text-2xl p-4 font-bold'>{heading}</h3>
      <section className='w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-15'>
        {posts.map((posts) => (
          <PostCard {...posts} key={posts._id} />
        ))}
      </section>
    </div>
  );
}
