import * as S from './style'
import Link from 'next/link'
import * as I from 'asset/svg'
import SidebarList from 'components/common/molecules/SidebarList'
import ProfileBoard from 'components/common/molecules/ProfileBoard'
import LogoutBtn from 'components/common/atoms/LogoutBtn'
import { roleType } from 'recoilAtoms'
import { useRecoilValue } from 'recoil'
import { Palette } from 'style/global'

const Sidebar = () => {
  const role = useRecoilValue(roleType)

  return (
    <S.Wrapper>
      <Link href="/home">
        <S.LogoBox>
          {role === 'member' ? <I.GKRLogo /> : <I.GKRLogoA />}
          {role === 'member' ? <I.Logo2A /> : <I.Logo2 />}
        </S.LogoBox>
      </Link>
      <S.Top>
        <SidebarList />
      </S.Top>
      <S.Bottom>
        <ProfileBoard />
        <LogoutBtn />
      </S.Bottom>
    </S.Wrapper>
  )
}

export default Sidebar
