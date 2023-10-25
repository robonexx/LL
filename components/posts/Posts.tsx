import { PostType } from '@/sanity/types/Post';
import PostCard from './PostCard';

export default function Posts({ posts = [] }: { posts: PostType[] }) {
  const heading = posts?.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className='relative max-w-full min-h-full overflow-hidden grid px-4 md:px-8'>
      <h2 className='p-4 font-bold text-gray-700 text-3xl'>
        Read latest
      </h2>
      <h3 className='text-2xl p-4 font-bold'>{heading}</h3>
      <section className='w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 px-16 lg:px-8'>
        {posts.map((posts) => (
          <PostCard {...posts} key={posts._id} />
        ))}
      </section>
    </div>
  );
}
