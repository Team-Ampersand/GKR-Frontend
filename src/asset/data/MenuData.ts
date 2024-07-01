import {
  Folder,
  Profile,
  Bell,
  Cution,
  Letter,
  Box,
  Magnifier,
} from 'asset/svg'

interface menuListProps {
  icon: any
  routerName: string
  title: string
  show: string[]
}

export const MenuData: menuListProps[] = [
  {
    icon: Folder,
    routerName: '/home',
    title: '홈',
    show: ['ROLE_ADMIN', 'ROLE_STUDENT', 'ROLE_TEACHER'],
  },
  {
    icon: Profile,
    routerName: '/rentallist',
    title: '기자재 관리',
    show: ['ROLE_ADMIN', 'ROLE_STUDENT', 'ROLE_TEACHER'],
  },
  {
    icon: Box,
    routerName: '/productmanagement',
    title: '물품관리',
    show: ['ROLE_ADMIN', 'ROLE_TEACHER'],
  },
  {
    icon: Cution,
    routerName: '/allviolation',
    title: '제재관리',
    show: ['ROLE_ADMIN', 'ROLE_TEACHER'],
  },
  {
    icon: Cution,
    routerName: '/violation',
    title: '제재내역',
    show: ['ROLE_STUDENT'],
  },
  {
    icon: Letter,
    routerName: '/request',
    title: '요청목록',
    show: ['ROLE_ADMIN', 'ROLE_TEACHER'],
  },
  {
    icon: Bell,
    routerName: '/notice',
    title: '공지사항',
    show: ['ROLE_ADMIN', 'ROLE_STUDENT', 'ROLE_TEACHER'],
  },
  {
    icon: Magnifier,
    routerName: '/search',
    title: '검색하기',
    show: ['ROLE_ADMIN', 'ROLE_STUDENT', 'ROLE_TEACHER'],
  },
]
