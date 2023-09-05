import * as S from './style';

interface BtnProps {
  text: string;
  onclick?: () => void;
  fontsize?: string;
  border?: boolean;
}

const Button = ({ text, onclick, fontsize, border }: BtnProps) => {
  return (
    <S.Wrapper fontsize={fontsize} border={border}>
      {text}
    </S.Wrapper>
  );
};

export default Button;
