import { mutate } from 'swr'
import { removeToken } from './removeToken'
import { toast } from 'react-toastify'

export const logout = () => {
  removeToken()
  mutate(() => true, undefined, { revalidate: false })
  removeToken()
  toast.success('로그아웃 성공')
}
