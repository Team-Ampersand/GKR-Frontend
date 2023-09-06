import { useRecoilValue, useSetRecoilState } from 'recoil';
import { calendarState, rentalPeriod, roleType } from 'recoilAtoms';
import * as S from './style';

const Calendar = () => {
  const role = useRecoilValue(roleType);
  const setPeriod = useSetRecoilState(rentalPeriod);
  const setCalendar = useSetRecoilState(calendarState);

  return (
    <S.Wrapper>
      <S.CalendarLayer
        locale="ko"
        formatDay={(_locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        calendarType="US"
        role={role}
        onChange={(value) => {
          setPeriod([value[0], value[1]]);
          setCalendar(false);
        }}
        selectRange
        goToRangeStartOnSelect={false}
      />
    </S.Wrapper>
  );
};

export default Calendar;
