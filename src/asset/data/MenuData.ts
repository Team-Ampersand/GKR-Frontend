import { Folder, Profile, Handshake, Bell } from 'asset/svg';

interface menuListProps {
  icon: any;
  routerName: string;
  title: string;
}

export const MenuData: menuListProps[] = [
  {
    icon: Folder,
    routerName: '/home',
    title: 'Main Page',
  },
  {
    icon: Profile,
    routerName: '/profile',
    title: 'Profile',
  },
  {
    icon: Handshake,
    routerName: '/Rental',
    title: 'Rental',
  },
  {
    icon: Bell,
    routerName: '/Notice',
    title: 'Notification',
  },
];
