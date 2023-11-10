import { apiClient } from 'utils/libs/apiClient'
import { EquipmentController } from 'utils/libs/requestUrls'

export const getEquipment = async () => {
  try {
    const { data } = await apiClient.get(EquipmentController.getEquipment())
    return { data }
  } catch (e: any) {}
}
