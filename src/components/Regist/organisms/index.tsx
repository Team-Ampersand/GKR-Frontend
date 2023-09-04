import Button from '../../common/atoms/Button';
import BannerBox from '../molecules/BannerBox';
import InputBox from '../molecules/InputBox';
import * as S from './style';

const Regist = () => {
  return (
    <S.Wrapper>
      <p>등록하기</p>
      <BannerBox />
      <InputBox />
      <S.BtnBox>
        <Button text="등록하기" fontsize="20" />
      </S.BtnBox>
    </S.Wrapper>
  );
};

export default Regist;
