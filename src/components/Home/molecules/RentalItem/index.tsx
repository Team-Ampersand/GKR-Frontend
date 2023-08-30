import Image from 'next/image';
import * as S from './style';
import img from 'asset/png/raspberry pie.png';

const RentalItem = () => {
  return (
    <S.Layer>
      <Image src={img} alt="" />
      <S.ContentBox>
        <h2>Raspberry pie</h2>
        <div>
          <S.Description>대여 기간: 06.01 ~ 07.02</S.Description>
          <br />
          <S.Description>대여 장소: 전문교육부</S.Description>
        </div>
        <S.Tag>#Iot</S.Tag>
      </S.ContentBox>
    </S.Layer>
  );
};

export default RentalItem;
