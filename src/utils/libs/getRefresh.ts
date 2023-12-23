import { InternalAxiosRequestConfig } from 'axios'
import { tokenReissue } from 'utils/apis/auth'
import { getToken } from './getToken'
export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  console.log('getRefresh')
  if (typeof window !== 'object') return config

  const { AccessToken, RefreshToken } = await getToken(null)
  console.log(AccessToken)
  if (config.headers && AccessToken !== undefined) {
    config.headers['Authorization'] = `Bearer ${AccessToken}`
  } else if (!AccessToken) {
    const { AccessToken }: any = await tokenReissue(RefreshToken || '', null)
    config.headers['Authorization'] = `Bearer ${AccessToken}`
  }
  return config
}
