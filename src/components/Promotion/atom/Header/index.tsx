import { GKRLogo } from 'asset/svg';
import * as S from './style';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <GKRLogo />
        <p>GKR</p>
      </S.Logo>
      <S.Description>
        GSM의 기자재 <br />
        대여 서비스를 이용해보세요
      </S.Description>
    </S.Wrapper>
  );
};

export default Header;
