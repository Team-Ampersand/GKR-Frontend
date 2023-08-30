import * as S from './style';

interface BtnProps {
  text: string;
  onclick?: () => void;
}

const Button = ({ text, onclick }: BtnProps) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};

export default Button;
