import NoticeList from 'components/common/molecules/ListBox'
import TopBox from '../../../common/molecules/TopBox'
import * as S from './style'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { NoticeController } from 'utils/libs/requestUrls'
import { getData } from 'utils/apis/data'

const Notice = () => {
  const url = NoticeController.getNotice()
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
      <TopBox text="공지사항" />
      {data?.data ? <NoticeList data={data?.data} /> : null}
    </S.Wrapper>
  )
}

export default Notice
