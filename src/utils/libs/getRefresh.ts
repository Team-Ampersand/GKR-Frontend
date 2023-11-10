import { InternalAxiosRequestConfig } from 'axios'
import { tokenReissue } from 'utils/apis/auth'
import { getToken } from './getToken'

export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'object') {
    return config
  }
  const { Authorization, RefreshToken } = await getToken(null)
  if (config.headers && Authorization) {
    config.headers['Authorization'] = Authorization
  } else if (!Authorization && config?.url?.includes('/auth')) {
    const { newAuthorization }: any = await tokenReissue(
      RefreshToken || '',
      null,
    )
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${newAuthorization}`
    }
  }

  return config
}