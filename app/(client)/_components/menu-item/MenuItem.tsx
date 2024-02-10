'use client'
import { useState} from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '@iconify/react';
import { SideNavItem } from '@/types/types';


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
                      href={`/${subItem.path}`}
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
            href={`/${item.path}`}
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
  
export default MenuItem
  