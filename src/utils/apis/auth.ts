import { GetServerSidePropsContext } from 'next'
import { apiClient } from 'utils/libs/apiClient'
import { setToken } from 'utils/libs/setToken'

export const tokenReissue = async (
  refreshToken: string,
  ctx: GetServerSidePropsContext | null,
) => {
  let newAcessToken: string
  try {
    const { data } = await apiClient.patch(
      'auth',
      {},
      {
        headers: {
          refreshToken,
        },
      },
    )
    newAcessToken = data.accessToken
    refreshToken = data.refreshToken
    setToken(newAcessToken, refreshToken, ctx)
    return { newAcessToken }
  } catch (e: any) {}
}
