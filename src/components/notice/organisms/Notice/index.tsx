import NoticeList from 'components/common/molecules/NoticeList'
import TopBox from '../../../common/molecules/TopBox'
import * as S from './style'

const Notice = () => {
  return (
    <S.Wrapper>
      <TopBox text="공지사항" />
      <NoticeList />
    </S.Wrapper>
  )
}

export default Notice
