import { toast } from 'react-toastify'
import { apiClient } from 'utils/libs/apiClient'

type paramsObj = {
  equipmentStatus?: string
  equipmentType?: string
}

export const getData = async (url: string | undefined, params?: paramsObj) => {
  try {
    let config = {}

    if (params && params.equipmentStatus) {
      config = {
        params: {
          equipmentStatus: params.equipmentStatus,
        },
      }
    } else if (params && params.equipmentType) {
      config = {
        params: {
          equipmentType: params.equipmentType,
        },
      }
    }
    const { data } = await apiClient.get(url || '', config)
    return { data }
  } catch (error) {
    toast.error('알수없는 에러가 발생했습니다.')
    throw error
  }
}
