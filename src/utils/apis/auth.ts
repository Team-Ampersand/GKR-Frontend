import { GetServerSidePropsContext } from 'next'
import { apiClient } from 'utils/libs/apiClient'
import { setToken } from 'utils/libs/setToken'

export const tokenReissue = async (
  refreshToken: string,
  ctx: GetServerSidePropsContext | null,
) => {
  let newAuthorization: string
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
    newAuthorization = data.accessToken
    refreshToken = data.refreshToken
    setToken(newAuthorization, refreshToken, ctx)
    return { newAuthorization }
  } catch (e: any) {}
}
