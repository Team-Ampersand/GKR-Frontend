import * as S from './style';
import Image from 'next/image';
import img from 'asset/png/raspberry pie.png';
import Button from 'components/common/atoms/Button';

const RequestDetail = () => {
  return (
    <S.Wrapper>
      <S.ImgBox>
        <Image src={img} alt="" sizes="100%" layout="fill" priority={true} />
      </S.ImgBox>

      <S.UserInfo>
        <S.LeftBox>
          <S.ProfileImg />
          <S.InfoBox>
            손정민
            <p>3학년1반12번</p>
          </S.InfoBox>
        </S.LeftBox>
        2023.06.26
      </S.UserInfo>

      <S.Content>
        <h3>[연장 요청] 손정민 학생 </h3>
        <div>
          <h4>연장이유</h4>
          <p>
            연장하게 된 이유는 ~~~ 이렇쿵 저러쿵 해서 이 기자재를 연장하게
            되었습니다. 연장하게 된 이유는 ~~~ 이렇쿵 저러쿵 해서 이 기자재를
            연장하게 되었습니다. 연장하게 된 이유는 ~~~ 이렇쿵 저러쿵 해서 이
            기자재를 연장하게 되었습니다.
          </p>
        </div>
      </S.Content>
      <S.BtnWrapper>
        <Button text="거절하기" border={true} />
        <Button text="수락하기" />
      </S.BtnWrapper>
    </S.Wrapper>
  );
};

export default RequestDetail;
