import * as S from './style'
import * as I from '../../../../asset/svg/index'
import { logout } from 'utils/libs/logout'
import { useRouter } from 'next/navigation'

const LogoutBtn = () => {
  const router = useRouter()
  const handleClickLogout = () => {
    logout()
    router.push('/')
  }
  return (
    <S.Wrapper onClick={handleClickLogout}>
      <S.Content>
        <S.IconBox>
          <I.Exit />
        </S.IconBox>
        <S.NameBox>로그아웃</S.NameBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default LogoutBtn
