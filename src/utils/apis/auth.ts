import { useFetch } from 'hook/useFetch'
import { apiClient } from 'utils/libs/apiClient'
import TokenManager from './TokenManager'

export const TokenReissue = async (refreshToken: string) => {
  const tokenManager = new TokenManager()
  const { data } = await useFetch({ url: '/auth', method: 'patch' })
  try {
    const { data } = await apiClient.patch(
      '/auth',
      {},
      {
        headers: {
          refreshToken,
        },
      },
    )
    tokenManager.setTokens(data)
    const newAccessToken: string = data.accessToken
    refreshToken = data.refreshToken
    return { newAccessToken, refreshToken }
  } catch {
    return { newAccessToken: '', refreshToken }
  }
}
