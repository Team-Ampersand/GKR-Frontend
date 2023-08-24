import * as S from './style';
import Link from 'next/link';
import { GKRLogo } from 'asset/svg';
import SidebarList from 'components/common/molecules/SidebarList';
import ProfileBoard from 'components/common/molecules/ProfileBoard';
import LogoutBtn from 'components/common/atoms/LogoutBtn';

const Sidebar = () => {
  return (
    <S.Wrapper>
      <Link href="/home">
        <S.LogoBox>
          <GKRLogo width="45" height="45" viewBox="0 0 100 100" />
          <p>GKR</p>
        </S.LogoBox>
      </Link>
      <ProfileBoard />
      <SidebarList />
      <LogoutBtn />
    </S.Wrapper>
  );
};

export default Sidebar;
