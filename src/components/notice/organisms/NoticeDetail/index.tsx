import { NoticeDetailDummy } from 'asset/dummy/NoticeDetailDummy'
import DetailBox from 'components/common/molecules/DetailBox'
import { useState } from 'react'

import * as S from './style'
import { useParams } from 'next/navigation'

const NoticeDetail = () => {
  const params = useParams()
  return (
    <S.Wrapper>
      <DetailBox
        id={params.id}
        title={'서비스 오픈 베타 공지'}
        createNoticeDate={'2022.06.26 - 06:23'}
        content={
          ' 오늘 서비스 오픈 시작하는 지케이알이빈다오늘 서비스 오픈 시작하는 지케이알이빈다오늘 서비스 오픈 시작하는 지케이알이빈다\n오늘 서비스 오픈 시작하는 지케이알이빈다오늘 서비스 오픈 시작하는 지케이알이빈다오늘 서비스 오픈 시작하는 지케이알이빈다'
        }
        imageUrl={null}
      />
    </S.Wrapper>
  )
}

export default NoticeDetail
