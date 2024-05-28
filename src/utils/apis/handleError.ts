import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'

const handleError = (error: any) => {
  const errorMessage =
    error.response?.data?.message || '알 수 없는 에러가 발생했습니다.'
  toast.error(errorMessage, toastOption)
  throw error
}

export default handleError
