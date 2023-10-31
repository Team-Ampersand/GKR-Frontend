import TopBox from '../../../common/molecules/TopBox'
import * as S from './style'

interface Props {
  id: string | undefined
}

const NoticeDetail = ({ id }: Props) => {
  return (
    <S.Wrapper>
      <TopBox text="공지사항" />
    </S.Wrapper>
  )
}

export default NoticeDetail
