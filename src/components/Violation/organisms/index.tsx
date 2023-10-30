import TopBox from '../molecules/Box/TopBox'
import ViolationList from '../molecules/Box/VoilationListBox'
import * as S from './style'

const Violation = () => {
  return (
    <S.Wrapper>
      <TopBox text='제재 내역'/>
      <ViolationList />
    </S.Wrapper>
  )
}

export default Violation
