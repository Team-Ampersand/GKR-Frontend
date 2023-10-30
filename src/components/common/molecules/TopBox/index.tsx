import { useRecoilValue } from 'recoil'
import * as S from './style'
import { roleType } from 'recoilAtoms'

interface TopBoxProps {
  text: string
}

const TopBox = ({ text }: TopBoxProps) => {
  const role = useRecoilValue(roleType)
  return (
    <S.Wrapper>
      <S.TitleWrapper roleType={role}>{text}</S.TitleWrapper>
      <S.LineWrapper />
    </S.Wrapper>
  )
}

export default TopBox
