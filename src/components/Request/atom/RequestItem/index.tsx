import * as S from './style';
import Image from 'next/image';
import img from 'asset/png/raspberry pie.png';
import Link from 'next/link';

const RequestItem = ({ id }: { id: number }) => {
  return (
    <Link href={`/request/${id}`}>
      <S.Wrapper>
        <S.LeftBox>
          <S.ImgBox>
            <Image
              src={img}
              alt=""
              sizes="100%"
              layout="fill"
              priority={true}
            />
          </S.ImgBox>
          <S.InfoBox>
            <p>Raspberry pie</p>
            <div>
              <p>대여 기간 - 06.01 ~ 07.02</p>
              <p>대여 장소 - 전문교육부</p>
            </div>
            <p>#IOT</p>
          </S.InfoBox>
        </S.LeftBox>
        <S.CenterBox>
          {'연장요청: 손정민'}
          <p>
            연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유연장요청이유ㅁㅁㅁ
          </p>
        </S.CenterBox>
        <S.RightBox>
          <p>{'2023.06.26'}</p>
        </S.RightBox>
      </S.Wrapper>
    </Link>
  );
};

export default RequestItem;
