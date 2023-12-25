import { useRouter } from 'next/navigation'
import { gauthUrl } from 'utils/libs/gauthUrl'
import GauthLoginButton from '../atom/GauthLoginButton'
import Header from '../atom/Header'
import { Wrapper } from './style'
import { Login } from 'utils/apis/auth'
import equipment from 'asset/png/equipment.webp'
import IsLoggedIn from 'utils/IsLoggedIn'
import { useEffect } from 'react'

const Promotion = () => {
  const router = useRouter()
  useEffect(() => {
    if (IsLoggedIn()) router.push('/home')
  }, [])
  Login()
  return (
    <Wrapper>
      <div className="imageCover">
        <img src={equipment.src} alt="" />
        <div className="blur" />
      </div>
      <Header />
      <GauthLoginButton onClick={() => router.replace(gauthUrl)} />
    </Wrapper>
  )
}
export default Promotion
