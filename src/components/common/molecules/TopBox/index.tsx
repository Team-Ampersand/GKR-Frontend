import * as S from './style'

interface TopBoxProps {
  text: string
}

const TopBox = ({ text }: TopBoxProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>{text}</S.TitleWrapper>
      <S.LineWrapper />
    </S.Wrapper>
  )
}

export default TopBox
