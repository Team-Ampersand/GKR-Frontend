import axios from 'axios'
import { baseUrl } from './env'
import { getRefresh } from './getRefresh'

export const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
})

apiClient.interceptors.request.use(getRefresh)
