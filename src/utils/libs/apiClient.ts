import axios from 'axios'
import { getRefresh } from './getRefresh'
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
})
apiClient.interceptors.request.use(getRefresh)
