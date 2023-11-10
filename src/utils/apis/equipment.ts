import { toast } from 'react-toastify'
import { apiClient } from 'utils/libs/apiClient'
import { EquipmentController } from 'utils/libs/requestUrls'

interface GetEquipmentParams {
  equipmentType?: string
}
interface ApiConfig {
  params?: { equipmentType: string }
}
export const getEquipment = async ({ equipmentType }: GetEquipmentParams) => {
  try {
    const config: ApiConfig = {}
    const url = EquipmentController.getEquipment()
    if (equipmentType) {
      config.params = {
        equipmentType: equipmentType,
      }
    }
    const { data } = await apiClient.get(url, config)
    return { data }
  } catch (error) {
    toast.error('알수없는 에러가 발생했습니다.')
    throw error
  }
}
