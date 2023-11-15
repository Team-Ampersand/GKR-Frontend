import ImageFrame from 'components/Detail/molecules/ImageFrame'
import * as S from './style'
import RequestDetailItem from 'components/Request/molecules/RequestDetailItem'
import RequsetButtonList from 'components/Request/molecules/RequestButtonList'
import { useParams } from 'next/navigation'
import { OrderController } from 'utils/libs/requestUrls'
import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { useEffect, useState } from 'react'
interface DetailProps {
  id: number
  name: string
  imageUrl: string
  description: string
  userName: string
  orderType: 'RENTAL' | 'RETURN' | 'EXTENSION' | undefined
  grade: number
  classNum: string
  stuNum: string
  reason: string
  rentalStartDate: any
  rentalEndDate: any
}
function formatDate(date: any) {
  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  return `${year}.${month}.${day}`
}
export default function RequestDetail() {
  const params = useParams()
  const id = params.id
  const url = OrderController.detailOrder(id)
  const { data } = useQuery(['order', url], () => getData(url), {
    enabled: !!url,
    refetchOnWindowFocus: false,
  })
  const [detailData, setData] = useState<DetailProps>()
  useEffect(() => {
    if (data?.data) {
      setData(data.data)
    }
  }, [data])
  const startDate = detailData?.rentalStartDate
    ? new Date(detailData?.rentalStartDate)
    : null
  const endDate = detailData?.rentalEndDate
    ? new Date(detailData?.rentalEndDate)
    : null
  const formattedStartDate = startDate ? formatDate(startDate) : '대기중'
  const formattedEndDate = endDate ? formatDate(endDate) : '대기중'
  return (
    <S.DetailWrapper>
      <ImageFrame url={detailData?.imageUrl} />
      <S.Title>{detailData?.name}</S.Title>
      <S.ContentsWrapper>{detailData?.description}</S.ContentsWrapper>
      <S.Line />
      <S.RequestContentList>
        <RequestDetailItem title="신청자" content={detailData?.userName} />
        <RequestDetailItem
          title="학번"
          content={`${detailData?.grade}${detailData?.classNum}${detailData?.stuNum}`}
        />
        <RequestDetailItem
          title="대여한 기간"
          content={`${formattedStartDate} ~ ${formattedEndDate}`}
        />
        <RequestDetailItem title="사유" content={detailData?.reason} />
      </S.RequestContentList>
      <RequsetButtonList id={1} orderType={detailData?.orderType} />
    </S.DetailWrapper>
  )
}
