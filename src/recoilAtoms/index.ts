import { atom } from 'recoil';

export const roleType = atom<'member' | 'admin'>({
  key: 'roleType',
  default: 'admin',
});
