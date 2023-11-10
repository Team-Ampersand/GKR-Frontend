import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { TokensType } from 'types/apis/TokenManager'
import useFetch from './useFetch'
import { toast } from 'react-toastify'
import { setToken } from 'utils/libs/setToken'

const useLogin = () => {
  const router = useRouter()

  const params = useSearchParams()
  const gauthCode = params.get('code')

  const { fetch } = useFetch<TokensType>({
    url: 'auth',
    method: 'post',
    successMessage: '로그인되었습니다.',
    errors: '로그인에 실패했습니다.',
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        setToken(data.accessToken, data.refreshToken, null)
      }
      router.replace('/home')
    },
    onFailure: () => {
      router.replace('')
    },
  })

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}

export default useLogin
