"use client";

import { useParams } from 'next/navigation'
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from '@/lib/sanity.queries';
import Post from "@/components/posts/Post";
import { PostType } from '@/sanity/types/Post';

export default function PreviewPost({ post }: { post: PostType }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <Post post={data} />;
}