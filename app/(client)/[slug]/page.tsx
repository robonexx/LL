import { SanityDocument } from '@sanity/client';
import { getPage, pagePathsQuery } from '@/sanity/lib/quaries';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/previewprovider/PreviewProvider';
import PreviewPost from '@/components/previewpost/PreviewPost';
import { client } from '@/sanity/lib/client';
import { getCachedClient } from '@/lib/getClient';
import { sanityFetch } from '@/sanity/lib/fetch';
import PageContent from '../_components/page-content/PageContent';
import { PageType } from '@/sanity/types/Page';

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const pages = await client.fetch(pagePathsQuery);
  return pages;
}

export default async function postPage({ params }: Props) {
  const page = await sanityFetch<PageType>({ query: getPage, params });

  console.log('post from post ', page);

  /* const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const postpreview = await getCachedClient(preview)<PostType>(getPost, params); */

  /* if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPost page={postpreview} />
      </PreviewProvider>
    );
  } */

  return (
    <section className='flex items-center justify-center w-full h-full'>
      <PageContent page={page} />
    </section>
  );
}
