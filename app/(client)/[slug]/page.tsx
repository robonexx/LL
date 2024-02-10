import React from 'react';
import PageContent from '../_components/page-content/PageContent';
import { getSinglePage } from '@/lib/sanity.queries'

type Props = {
  params: { slug: string };
};

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const Page = async ({ params }: Props) => {
  const slug = params.slug;
  const pageData = await getSinglePage(slug);

  console.log(slug);

  console.log(pageData);

  return (
    <div>
     <PageContent page={pageData} />
    </div>
  );
};

export default Page;
