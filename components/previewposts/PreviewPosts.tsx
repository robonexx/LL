"use client";

import { useLiveQuery } from "@sanity/preview-kit";
import Posts from "@/components/posts/Posts";
import { postsQuery } from "@/lib/sanity.queries";
import { PostType } from "@/sanity/types/Post";

export default function PreviewPosts({
  posts = [],
}: {
  posts: PostType[];
}) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}