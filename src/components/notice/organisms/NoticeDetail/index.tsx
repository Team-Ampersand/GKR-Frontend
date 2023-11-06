import DetailBox from 'components/common/molecules/DetailBox'
import TopBox from '../../../common/molecules/TopBox'
import * as S from './style'
import useNotice from 'hook/useNotice'

interface Props {
  id: string | undefined
}

const NoticeDetail = ({ id }: Props) => {
  return (
    <S.Wrapper>
      <TopBox text="공지사항" />
      <DetailBox id={id} />
    </S.Wrapper>
  )
}

export default NoticeDetail
