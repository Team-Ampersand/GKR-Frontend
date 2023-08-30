import Button from '../atom/Button';
import BannerBox from '../molecules/BannerBox';
import InputBox from '../molecules/InputBox';
import * as S from './style';

const Regist = () => {
  return (
    <S.Wrapper>
      <p>등록하기</p>
      <BannerBox />
      <InputBox />
      <Button text="등록하기" />
    </S.Wrapper>
  );
};

export default Regist;
