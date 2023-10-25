'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '@/constants/navData';
import { SideNavItem } from '@/types/types';
import { Icon } from '@iconify/react';
import Logo from '@/components/logo/Logo';
import SidebarPosts from './SidebarPosts';
import { getPosts } from '@/lib/sanity.queries';
import { PostType } from '@/sanity/types/Post';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const Sidebar = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts.slice(0, 3));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

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
          {SIDENAV_ITEMS.map((item, idx) => {
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

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className=''>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-gray-200 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className='flex flex-row space-x-4 items-center'>
              <Icon icon={`lucide:${item.icon}`} width='24' height='24' />
              <span className='font-semibold text-xl  flex'>{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon='lucide:chevron-down' width='24' height='24' />
            </div>
          </button>

          {subMenuOpen && (
            <div className='my-2 ml-12 flex flex-col space-y-4'>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname
                        ? 'font-bold h-full w-full bg-zinc-200 hover:bg-gray-200 rounded-md p-2'
                        : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-md hover:bg-gray-200 ${
            item.path === pathname ? 'bg-zinc-200' : ''
          }`}
        >
          <Icon icon={`lucide:${item.icon}`} width='24' height='24' />
          <span className='font-semibold text-xl flex'>{item.title}</span>
        </Link>
      )}
    </div>
  );
};
