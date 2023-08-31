import * as S from './style';
import Image from 'next/image';
import img from 'asset/png/raspberry pie.png';

interface ItemProps {
  reason?: string;
  isOverdue?: boolean;
}

const OverdueItem = ({ reason, isOverdue }: ItemProps) => {
  return (
    <S.Wrapper>
      <S.LeftBox>
        <Image src={img} alt="" sizes="100%" layout="" priority={true} />
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
        {'대여학생: 손정민'}
        <p>{reason && '사유: ' + reason}</p>
      </S.CenterBox>
      <S.RightBox isOverdue={isOverdue}>
        <p>{'~ 2023.06.26'}</p>
        {!isOverdue && '연체됨'}
      </S.RightBox>
    </S.Wrapper>
  );
};

export default OverdueItem;
