import * as S from './style';

interface InputProps {
  title: string;
  placeholder?: string;
}

const SanctionInput = ({ title, placeholder }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Input>{placeholder}</S.Input>
    </S.Wrapper>
  );
};

export default SanctionInput;
