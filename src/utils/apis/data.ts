import { apiClient } from 'utils/libs/apiClient'
import handleError from './handleError'

export const getData = async (url: string | undefined, params?: any) => {
  try {
    const config = { params }
    const { data } = await apiClient.get(url || '', config)
    return { data }
  } catch (e) {
    handleError(e)
  }
}

export const postData = async (url: string, body?: any) => {
  try {
    const { data } = await apiClient.post(url || '', body)
    return { data }
  } catch (e) {
    handleError(e)
  }
}

export const postFormData = async (url: string, data: any) => {
  try {
    await apiClient.post(url || '', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  } catch (e) {
    handleError(e)
  }
}

export const patchFormData = async (url: string, data: any) => {
  try {
    await apiClient.patch(url || '', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  } catch (e) {
    handleError(e)
  }
}

export const patchData = async (url: string, data?: any) => {
  try {
    await apiClient.patch(url || '', data)
  } catch (e) {
    handleError(e)
  }
}

export const deleteData = async (url: string, params?: any) => {
  try {
    await apiClient.delete(url || '', { params })
  } catch (e) {
    handleError(e)
  }
}
