import { toast } from 'react-toastify'
import { apiClient } from 'utils/libs/apiClient'
import toastOption from 'utils/libs/toastOption'

type paramsObj = {
  equipmentStatus?: string
  equipmentType?: string
  orderStatus?: string
  name?: string
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
    } else if (params && params.orderStatus) {
      config = {
        params: {
          orderStatus: params.orderStatus,
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

export const postData = async (url: string, body?: any) => {
  try {
    const { data } = await apiClient.post(url || '', body)
  } catch (e: any) {
    throw e
  }
}

export const postFormData = async (url: string, data: any) => {
  try {
    await apiClient.post(url || '', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
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

export const deleteData = async (url: string, params?: any) => {
  try {
    await apiClient.delete(url || '', { params })
  } catch (e: any) {
    toast.error(e.response.data.message, toastOption)
    throw e
  }
}
