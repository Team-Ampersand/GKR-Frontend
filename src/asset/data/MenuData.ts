import { Folder, Profile, Handshake, Bell, Document, Cution } from 'asset/svg';

interface menuListProps {
  icon: any;
  routerName: string;
  title: string;
  show: string[];
}

export const MenuData: menuListProps[] = [
  {
    icon: Folder,
    routerName: '/home',
    title: '홈',
    show: ['admin', 'member'],
  },
  {
    icon: Profile,
    routerName: '/profile',
    title: '프로필',
    show: ['member'],
  },
  {
    icon: Handshake,
    routerName: '/Rental',
    title: '기자재 대여',
    show: ['member'],
  },

  {
    icon: Document,
    routerName: '/Regist',
    title: '물품 등록',
    show: ['admin'],
  },
  {
    icon: Cution,
    routerName: '/Sanction',
    title: '제재내역',
    show: ['admin'],
  },
  {
    icon: Bell,
    routerName: '/Notice',
    title: '알림',
    show: ['admin', 'member'],
  },
];
