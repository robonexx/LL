'use client';

import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { PostType } from '@/sanity/types/Post';

const builder = imageUrlBuilder(client);

const AltPost = ({ post }: { post: PostType }) => {
  return (
    <main className='container mx-auto prose prose-xl px-4 py-16'>
      <h1>{post.title}</h1>
      {post?.image ? (
        <Image
          src={builder.image(post.image).auto('format').fit('max').url()}
          alt={post?.image?.alt}
          width={300}
          height={300}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
};

export default AltPost;
