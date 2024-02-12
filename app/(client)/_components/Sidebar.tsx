'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SIDENAV_ITEMS } from '@/constants/navData';
import { getPages } from '@/sanity/sanity-utils';

import Logo from '@/components/logo/Logo';
import SidebarPosts from './SidebarPosts';
import { getPosts } from '@/lib/sanity.queries';
import { PostType } from '@/sanity/types/Post';
import MenuItem from './menu-item/MenuItem';
import { capitalizeFirstLetter } from '@/utils/CapitalizeFirstLetter';

const Sidebar = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts.slice(0, 3));

        const fetchedPages = await getPages();
        setPages(fetchedPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Combine links from constants and Sanity
  const LINKS = pages.map((p) => ({
    title: capitalizeFirstLetter(p.title),
    path: `${p.slug}`,
  }));

  const combinedLinks = [...LINKS, ...SIDENAV_ITEMS];

  return (
    <div className='md:w-60 bg-[#ededed] h-screen flex-1 fixed border-r border-zinc-100 hidden md:flex'>
      <div className='flex flex-col space-y-6 w-full'>
        <Link
          href='/'
          className='flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-100 h-12 w-full'
        >
          <Logo />
          <span className='font-bold text-xl hidden md:flex'>
            LockerLegends
          </span>
        </Link>

        <div className='flex flex-col space-y-2  md:px-6 '>
          {combinedLinks.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        <div className='flex flex-col space-y-2 lg:visible md:px-6'>
          <aside>{posts ? <SidebarPosts posts={posts} /> : <div></div>}</aside>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
