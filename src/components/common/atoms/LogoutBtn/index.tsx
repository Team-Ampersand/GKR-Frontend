import * as S from './style';
import { Exit } from 'asset/svg';

const LogoutBtn = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.IconBox>
          <Exit />
        </S.IconBox>
        <S.NameBox>Logout</S.NameBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default LogoutBtn;
