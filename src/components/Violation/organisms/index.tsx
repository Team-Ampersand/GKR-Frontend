import TopBox from '../molecules/Box/TopBox'
import ViolationList from '../molecules/Box/VoilationListBox'
import * as S from './style'

const Violation = () => {
  return (
    <S.Wrapper>
      <TopBox />
      <ViolationList />
    </S.Wrapper>
  )
}

export default Violation
