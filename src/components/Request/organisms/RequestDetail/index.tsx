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
  orderType: 'RENTAL' | 'RETURN' | 'EXTENSION'
  grade: number
  classNum: string
  stuNum: string
  reason: string
  rentalStartDate: string
  rentalEndDate: string
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
  return (
    <S.DetailWrapper>
      <ImageFrame url={'d'} />
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
          content="2023.05.26 ~ 2023.06.26"
        />
        <RequestDetailItem
          title="사유"
          content="이 라즈베리 파이로 말할거같으면 1도 아니고 무려 4인 놀라운 성능을 지닌 라즈베리 파이다.
사양은 112에서 234한 236이다."
        />
      </S.RequestContentList>
      <RequsetButtonList id={1} orderType={'RENTAL'} />
    </S.DetailWrapper>
  )
}
