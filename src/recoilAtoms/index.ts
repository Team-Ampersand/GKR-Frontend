import { atom } from 'recoil';

export const roleType = atom<'member' | 'admin'>({
  key: 'roleType',
  default: 'admin',
});

export const ruleType = atom<'연체' | '제재'>({
  key: 'ruleType',
  default: '연체',
});
