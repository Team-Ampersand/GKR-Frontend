import TopBox from '../../common/molecules/TopBox'
import ViolationList from '../molecules/Box/VoilationList'
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
