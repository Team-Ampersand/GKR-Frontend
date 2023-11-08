import { InternalAxiosRequestConfig } from 'axios'
import getToken from './getToken'
import { TokenReissue } from 'utils/apis/auth'

export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'object' || !config.headers) return config

  const { accessToken, refreshToken } = getToken()

  if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`
  else if (!accessToken && config.url?.includes('/auth')) {
    const { newAccessToken } = await TokenReissue(refreshToken || '')
    config.headers['Authorization'] = `Bearer ${newAccessToken}`
  }

  return config
}
