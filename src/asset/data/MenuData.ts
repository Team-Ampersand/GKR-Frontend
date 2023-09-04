import { Folder, Profile, Bell, Document, Cution, Letter } from 'asset/svg';

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
    icon: Document,
    routerName: '/regist',
    title: '물품 등록',
    show: ['admin'],
  },
  {
    icon: Cution,
    routerName: '/rule',
    title: '제재내역',
    show: ['admin'],
  },
  {
    icon: Letter,
    routerName: '/request',
    title: '요청내역',
    show: ['admin'],
  },
  {
    icon: Bell,
    routerName: '/notice',
    title: '알림',
    show: ['admin', 'member'],
  },
];
