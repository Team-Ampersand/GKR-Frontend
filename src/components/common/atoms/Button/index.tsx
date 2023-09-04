import * as S from './style';

interface BtnProps {
  text: string;
  onclick?: () => void;
  fontsize?: string;
}

const Button = ({ text, onclick, fontsize }: BtnProps) => {
  return <S.Wrapper fontsize={fontsize}>{text}</S.Wrapper>;
};

export default Button;
