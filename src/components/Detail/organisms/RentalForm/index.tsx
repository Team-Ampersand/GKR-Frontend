import InputField from 'components/Detail/molecules/InputField';
import { Noto_Sans_KR } from 'next/font/google';
import { useRecoilValue } from 'recoil';
import { calendarState, roleType } from 'recoilAtoms';
import * as S from './style';
import Calendar from 'components/common/atoms/Calendar';

const notoSansKR = Noto_Sans_KR({ weight: '700', subsets: ['latin'] });

const RentalForm = () => {
  const role = useRecoilValue(roleType);
  const isCalendar = useRecoilValue(calendarState);

  return (
    <S.Layer className={notoSansKR.className}>
      <InputField
        label="대여자 이름"
        placeholder="대여자 이름을 입력해주세요"
      />
      <InputField label="대여 사유" type="textarea" />
      <S.Submit role={role}>대여하기</S.Submit>

      {isCalendar && (
        <S.CalendarBox>
          <Calendar />
        </S.CalendarBox>
      )}
    </S.Layer>
  );
};

export default RentalForm;
