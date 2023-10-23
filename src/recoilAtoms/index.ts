import { atom } from 'recoil'

export const roleType = atom<'member' | 'admin'>({
  key: 'roleType',
  default: 'admin',
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

export const ProductChoice = atom({
  key: 'ProductChoice',
  default: '물품 등록하기',
})

export const ProductList = atom({
  key: 'ProductList',
  default: '노트북',
})
