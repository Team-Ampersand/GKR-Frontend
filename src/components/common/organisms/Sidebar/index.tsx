import * as S from './style';
import Link from 'next/link';
import { GKRLogo, GKRLogoA } from 'asset/svg';
import SidebarList from 'components/common/molecules/SidebarList';
import ProfileBoard from 'components/common/molecules/ProfileBoard';
import LogoutBtn from 'components/common/atoms/LogoutBtn';
import { roleType } from 'recoilAtoms';
import { useRecoilValue } from 'recoil';
import { Palette } from 'style/global';

const Sidebar = () => {
  const role = useRecoilValue(roleType);

  return (
    <S.Wrapper>
      <Link href="/home">
        <S.LogoBox>
          {role === 'member' ? (
            <GKRLogo width="45" height="45" viewBox="0 0 100 100" />
          ) : (
            <GKRLogoA />
          )}
          <p style={{ color: `${role === 'admin' && Palette.PRIMARY_P5}` }}>
            GKR
          </p>
        </S.LogoBox>
      </Link>
      <ProfileBoard />
      <SidebarList />
      <LogoutBtn />
    </S.Wrapper>
  );
};

export default Sidebar;
