import { HTMLInputTypeAttribute } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { calendarState, rentalPeriod, roleType } from 'recoilAtoms';
import * as S from './style';

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea' | 'period';
  placeholder?: string;
}

const InputField = ({ label, type = 'text', placeholder = '' }: Props) => {
  const role = useRecoilValue(roleType);
  const [isCalendar, setCalendar] = useRecoilState(calendarState);
  const period = useRecoilValue(rentalPeriod);

  const changeDate = (date: Date) => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  return (
    <S.Layer>
      <p>{label}</p>
      {type === 'textarea' ? (
        <S.Textarea
          placeholder={placeholder}
          rows={1}
          role={role}
          minRows={10}
        />
      ) : type === 'period' ? (
        <S.Label onFocus={() => setCalendar(!isCalendar)}>
          <S.Input
            value={changeDate(period[0]) + ' ~ ' + changeDate(period[1])}
            readOnly
            role={role}
            isCalendar={isCalendar}
          />
          <S.Icon />
        </S.Label>
      ) : (
        <S.Input type={type} placeholder={placeholder} role={role} />
      )}
    </S.Layer>
  );
};

export default InputField;
