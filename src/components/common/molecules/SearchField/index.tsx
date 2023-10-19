import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { roleType } from 'recoilAtoms';
import * as I from 'asset/svg'

const SearchField = () => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const { register, getValues } = useForm<{ text: string }>({
    defaultValues: { text: '' },
  });

  const role = useRecoilValue(roleType);

  const onChange = (e: string) => {
    clearTimeout(timer);

    const a = setTimeout(() => {
      console.log(getValues('text'));
    }, 500);

    setTimer(a);
  };

  return (
    <S.Label
      {...register('text', {
        onChange: onChange,
      })}
    >
      <S.Input role={role} type="text" placeholder="검색어를 입력해주세요" />
      <S.SearchIcon>
        <I.Magnifier />
      </S.SearchIcon>
    </S.Label>
  );
};

export default SearchField;
