import useLogin from 'hook/useLogin'
import { useRouter } from 'next/navigation'
import { gauthUrl } from 'utils/libs/gauthUrl'
import GauthLoginButton from '../atom/GauthLoginButton'
import Header from '../atom/Header'
import { Wrapper } from './style'

const Promotion = () => {
  const router = useRouter()
  useLogin()

  return (
    <Wrapper>
      <Header />
      <GauthLoginButton onClick={() => router.replace(gauthUrl)} />
    </Wrapper>
  )
}

export default Promotion
