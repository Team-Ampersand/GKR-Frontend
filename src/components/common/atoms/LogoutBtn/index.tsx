import * as S from './style';
import * as I from '../../../../asset/svg/index';


const LogoutBtn = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.IconBox>
          <I.Exit />
        </S.IconBox>
        <S.NameBox>로그아웃</S.NameBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default LogoutBtn;
