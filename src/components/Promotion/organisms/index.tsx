import { useRouter } from 'next/navigation'
import { gauthUrl } from 'utils/libs/gauthUrl'
import GauthLoginButton from '../atom/GauthLoginButton'
import Header from '../atom/Header'
import { Wrapper } from './style'
import { Login } from 'utils/apis/auth'

const Promotion = () => {
  const router = useRouter()
  Login()
  return (
    <Wrapper>
      <Header />
      <GauthLoginButton onClick={() => router.replace(gauthUrl)} />
    </Wrapper>
  )
}
export default Promotion
