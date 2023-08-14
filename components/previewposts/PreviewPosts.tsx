'use client';

import { useLiveQuery } from '@sanity/preview-kit';
import Posts from '@/components/posts/Posts';
import { postsQuery } from '@/lib/sanity.queries';
import { PostType } from '@/sanity/types/Post';
import { useParams } from 'next/navigation';

export default function PreviewPosts({ posts = [] }: { posts: PostType[] }) {
  const params = useParams();
  const [data] = useLiveQuery(posts, postsQuery, params);

  return <Posts posts={data} />;
}
