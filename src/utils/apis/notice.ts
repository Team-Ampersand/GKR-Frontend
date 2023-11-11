import { url } from 'inspector'
import { toast } from 'react-toastify'
import { apiClient } from 'utils/libs/apiClient'

export const getNoticeList = async (url: string) => {
  try {
    const { data } = await apiClient.get(url)
    return { data }
  } catch (error) {
    toast.error('알수없는 에러가 발생했습니다.')
  }
}
