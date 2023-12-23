import * as S from './style'
import * as I from '../../../../asset/svg/index'
import { logout } from 'utils/libs/logout'
import { useRouter } from 'next/navigation'

const LoginButton = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <S.LoginButtonWrapper onClick={handleClick}>
      <S.Content>
        <S.IconBox>
          <I.GauthLogo />
        </S.IconBox>
        <S.NameBox>로그인</S.NameBox>
      </S.Content>
    </S.LoginButtonWrapper>
  )
}

export default LoginButton
