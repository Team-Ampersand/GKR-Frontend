import { toast } from 'react-toastify'
import { apiClient } from 'utils/libs/apiClient'
import toastOption from 'utils/libs/toastOption'

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
  } catch (e: any) {
    toast.error(e.response.data.message, toastOption)
    throw e
  }
}

export const postData = async (url: string, data: any) => {
  try {
    await apiClient.post(url || '', data)
  } catch (e: any) {
    throw e
  }
}

export const patchData = async (url: string, data?: any) => {
  try {
    await apiClient.patch(url || '', data)
  } catch (e: any) {
    throw e
  }
}

export const deleteData = async (url: string, body?: any) => {
  console.log(body)
  try {
    await apiClient.delete(url || '', body)
  } catch (e: any) {
    toast.error(e.response.data.message, toastOption)
    throw e
  }
}
