import { NoticeDetailDummy } from 'asset/dummy/NoticeDetailDummy'
import DetailBox from 'components/common/molecules/DetailBox'
import { useState } from 'react'
import TopBox from '../../../common/molecules/TopBox'
import * as S from './style'

interface Props {
  id: string | undefined
}

const NoticeDetail = ({ id }: Props) => {
  const [dummy, setDummy] = useState(NoticeDetailDummy.NoticeDetailDummy)
  return (
    <S.Wrapper>
      <DetailBox dummy={dummy} />
    </S.Wrapper>
  )
}

export default NoticeDetail
