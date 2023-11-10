import { toast } from 'react-toastify'
import { apiClient } from 'utils/libs/apiClient'
import { EquipmentController } from 'utils/libs/requestUrls'

export const getEquipment = async () => {
  try {
    const url = EquipmentController.getEquipment()
    const { data } = await apiClient.get(url)
    return { data }
  } catch (error) {
    toast.error('알수없는 에러가 발생했습니다.')
    throw error
  }
}
