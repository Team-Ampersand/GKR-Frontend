import getRole from 'utils/getRole'
import * as S from './style'

interface TopBoxProps {
  text: string
}

const TopBox = ({ text }: TopBoxProps) => {
  const role = getRole()
  return (
    <S.Wrapper>
      <S.TitleWrapper roleType={role}>{text}</S.TitleWrapper>
      <S.LineWrapper />
    </S.Wrapper>
  )
}

export default TopBox
