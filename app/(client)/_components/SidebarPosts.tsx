import { PostType } from '@/sanity/types/Post';
import PostCard from './SidebarPostCard';

export default function SidebarPosts({ posts = [] }: { posts: PostType[] }) {

  return (
      <section className='w-full h-full flex flex-col'><p className='flex flex-row space-x-3 font-bold text-xl items-center justify-center md:justify-start md:px-6 border-b border-zinc-100 h-12 w-full'>
      Latest:
    </p>
        {posts ? posts.map((posts) => (
          <PostCard {...posts} key={posts._id} />
        )): (<div></div>)}
      </section>
  );
}
