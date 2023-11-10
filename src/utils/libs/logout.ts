import { mutate } from 'swr'
import { removeToken } from './removeToken'
import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'
export const logout = () => {
  removeToken()
  mutate(() => true, undefined, { revalidate: false })
  toast.success('로그아웃되었습니다.', toastOption)
}
