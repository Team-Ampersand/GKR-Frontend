import { People } from 'asset/svg';
import * as S from './style';

const ProfileBoard = () => {
  return (
    <S.Wrapper>
      <People />
      <S.InfoBox>
        손정민
        <br />
        <p>3학년1반12번</p>
      </S.InfoBox>
    </S.Wrapper>
  );
};

export default ProfileBoard;
