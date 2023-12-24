import { InternalAxiosRequestConfig } from 'axios'
import { tokenReissue } from 'utils/apis/auth'
import { getToken } from './getToken'
export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'object') return config

  const { AccessToken, RefreshToken } = await getToken(null)
  if (config.headers && AccessToken !== undefined) {
    config.headers['Authorization'] = `Bearer ${AccessToken}`
  } else if (!AccessToken && !config.url?.includes('auth')) {
    const { AccessToken }: any = await tokenReissue(RefreshToken || '', null)
    config.headers['Authorization'] = `Bearer ${AccessToken}`
  }
  return config
}
