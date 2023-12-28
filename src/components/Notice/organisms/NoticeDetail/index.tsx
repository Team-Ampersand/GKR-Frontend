import { NoticeDetailDummy } from 'asset/dummy/NoticeDetailDummy'
import DetailBox from 'components/common/molecules/DetailBox'
import { useState, useEffect } from 'react'
import { NoticeController } from 'utils/libs/requestUrls'
import { useQuery } from 'react-query'
import * as S from './style'
import { useParams } from 'next/navigation'
import { getData } from 'utils/apis/data'

const NoticeDetail = () => {
  const params = useParams()
  const url = NoticeController.getNoticeDetail(params.id)
  const { data, refetch } = useQuery(
    ['noticeList', url],
    () => {
      return getData(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  useEffect(() => {
    refetch()
  }, [refetch])
  return (
    <S.Wrapper>
      {data ? (
        <DetailBox
          id={data.data.id}
          title={data.data.title}
          createNoticeDate={data.data.createNoticeDate}
          content={data.data.content}
          imageUrl={data.data.imageUrl}
        />
      ) : null}
    </S.Wrapper>
  )
}

export default NoticeDetail
