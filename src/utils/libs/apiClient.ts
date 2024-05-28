import axios from 'axios'
import { getRefresh } from './getRefresh'
import BASE_HEADER from '../Config/Config.json'

export const apiClient = axios.create({
  baseURL: '/server',
  withCredentials: true,
  headers: BASE_HEADER,
})

apiClient.interceptors.request.use(getRefresh)
