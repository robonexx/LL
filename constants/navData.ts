import { SideNavItem } from '@/types/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
      title: 'Home',
      path: '/',
      icon: 'lucide:home' ,
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'History',
      path: '/history',
      icon: 'lucide:folder-clock' ,
      submenu: true,
      subMenuItems: [
        { title: 'History', path: '/history' },
        { title: 'Memorial', path: '/history/memorial' },
        { title: 'Soul Train', path: '/history/soultrain' },
        { title: 'Watts stax', path: '/history/wattsstax' },
      ],
    },
    {
      title: 'Knowledge',
      path: '/knowledge',
      icon: 'lucide:book' ,
      submenu: true,
      subMenuItems: [
        { title: 'O.G Pioneers', path: '/knowledge/pioneers' },
        { title: 'Curriculum', path: '/knowledge/curriculum' },
        { title: 'Social Era', path: '/knowledge/socialera' },
      ],
    },
    {
      title: 'Contact',
      path: '/Contact',
      icon: 'lucide:send' ,
    },
  ];