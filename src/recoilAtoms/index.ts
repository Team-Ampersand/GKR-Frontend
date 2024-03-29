import { ReactNode } from 'react'
import { atom } from 'recoil'
import { modalDataType } from 'types/hooks/useModal'

export const roleType = atom<'member' | 'admin'>({
  key: 'roleType',
  default: 'member',
})

export const calendarState = atom<boolean>({
  key: 'calendarState',
  default: false,
})

export const rentalPeriod = atom({
  key: 'rentalPeriod',
  default: [new Date(), new Date()],
})

export const ruleType = atom<'연체' | '제재'>({
  key: 'ruleType',
  default: '연체',
})

export const filterState = atom({
  key: 'filterState',
  default: {
    equipmentStatus: '',
    equipmentType: '',
  },
})

export const ProductChoice = atom({
  key: 'ProductChoice',
  default: '물품 등록하기',
})

export const ProductList = atom({
  key: 'ProductList',
  default: '모니터',
})

export const DeleteChoice = atom<number[]>({
  key: 'DeleteChoice',
  default: [],
})

export const searchState = atom({
  key: 'searchState',
  default: [],
})

export const noticeEditModal = atom({
  key: 'noticeEditModal',
  default: {
    state: false,
    id: 0,
  },
})

export const IsModal = atom<modalDataType>({
  key: 'IsModal',
  default: {
    component: null,
    visible: false,
  },
})
