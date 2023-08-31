import InputField from 'components/Detail/molecules/InputField';
import { Noto_Sans_KR } from 'next/font/google';
import { useRecoilValue } from 'recoil';
import { roleType } from 'recoilAtoms';
import * as S from './style';

const notoSansKR = Noto_Sans_KR({ weight: '700', subsets: ['latin'] });

const RentalForm = () => {
  const role = useRecoilValue(roleType);

  return (
    <S.Layer className={notoSansKR.className}>
      <InputField
        label="대여자 이름"
        placeholder="대여자 이름을 입력해주세요"
      />
      <InputField label="대여 기간" type="period" />
      <InputField label="대여 사유" type="textarea" />
      <S.Submit role={role}>대여하기</S.Submit>
    </S.Layer>
  );
};

export default RentalForm;
