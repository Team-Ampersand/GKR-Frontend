import { GetServerSidePropsContext } from 'next'
import { apiClient } from 'utils/libs/apiClient'
import { setToken } from 'utils/libs/setToken'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { TokensType } from 'types/apis/TokenManager'
import { toast } from 'react-toastify'
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
          'Refresh-Token': `Bearer ${refreshToken}`,
        },
      },
    )
    newAcessToken = data.accessToken
    refreshToken = data.refreshToken
    setToken(newAcessToken, refreshToken, ctx)
    return { newAcessToken }
  } catch (e: any) {}
}

export const useLogin = () => {
  const router = useRouter()
  const params = useSearchParams()
  const gauthCode = params.get('code')
  const fetch = async (data: { code: string }) => {
    try {
      const { data: tokens } = await apiClient.post<TokensType>('auth', data)
      setToken(tokens.accessToken, tokens.refreshToken, null)
      router.push('/home')
      toast.success('로그인 성공')
    } catch (e: any) {
      router.push('/')
      toast.error('로그인 실패')
    }
  }
  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}
