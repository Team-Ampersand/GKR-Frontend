import { HTMLInputTypeAttribute } from 'react';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { roleType } from 'recoilAtoms';

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea' | 'period';
  placeholder?: string;
}

const InputField = ({ label, type = 'text', placeholder = '' }: Props) => {
  const role = useRecoilValue(roleType);

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
        <S.Label>
          <S.Input
            value="2023년 8월 1일 ~ 2024년 8월 1일"
            readOnly
            role={role}
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
