import * as I from 'asset/svg'
import LogoutBtn from 'components/common/atoms/LogoutBtn'
import ProfileBoard from 'components/common/molecules/ProfileBoard'
import SidebarList from 'components/common/molecules/SidebarList'
import Link from 'next/link'
import * as S from './style'
import IsLoggedIn from 'utils/IsLoggedIn'
import { useEffect, useState } from 'react'
import LoginButton from 'components/common/atoms/LoginButton'
import getRole from 'utils/getRole'

const Sidebar = () => {
  const [login, setLogin] = useState(false)
  const role = getRole()
  useEffect(() => {
    setLogin(IsLoggedIn())
  }, [])
  return (
    <S.Wrapper>
      <S.Top>
        <Link href="/home">
          <S.LogoBox>
            {role === 'ROLE_STUDENT' ? <I.GKRLogo /> : <I.GKRLogoA />}
            {role === 'ROLE_STUDENT' ? <I.Logo2A /> : <I.Logo2 />}
          </S.LogoBox>
        </Link>
        <SidebarList />
      </S.Top>
      <S.Bottom>
        {login ? (
          <>
            <ProfileBoard />
            <LogoutBtn />
          </>
        ) : (
          <LoginButton />
        )}
      </S.Bottom>
    </S.Wrapper>
  )
}

export default Sidebar
