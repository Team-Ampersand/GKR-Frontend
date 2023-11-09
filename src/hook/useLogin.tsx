import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { TokensType } from 'types/apis/TokenManager'
import TokenManager from 'utils/apis/TokenManager'
import useFetch from './useFetch'
import { toast } from 'react-toastify'

const useLogin = () => {
  const router = useRouter()

  const params = useSearchParams()
  const gauthCode = params.get('code')

  const { fetch } = useFetch<TokensType>({
    url: 'auth',
    method: 'post',
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        const tokenManager = new TokenManager()
        tokenManager.setTokens(data)
      }
      router.replace('/home')
      toast.success('로그인 성공')
    },
    onFailure: () => {
      router.replace('')
      toast.error('로그인 실패')
    },
  })

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}

export default useLogin
