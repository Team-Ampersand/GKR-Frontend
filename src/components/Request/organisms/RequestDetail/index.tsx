import ImageFrame from 'components/Detail/molecules/ImageFrame'
import * as S from './style'
import RequestDetailItem from 'components/Request/molecules/RequestDetailItem'
import RequsetButtonList from 'components/Request/molecules/RequestButtonList'
import { useParams } from 'next/navigation'

export default function RequestDetail() {
  const params = useParams()
  const id = params.id
  return (
    <S.DetailWrapper>
      <ImageFrame url={'d'} />
      <S.Title>Raspberry pi 4</S.Title>
      <S.ContentsWrapper>
        이 라즈베리 파이로 말할거같으면 1도 아니고 무려 4인 놀라운 성능을 지닌
        라즈베리 파이다. 사양은 112에서 234한 236이다.
      </S.ContentsWrapper>
      <S.Line />
      <S.RequestContentList>
        <RequestDetailItem title="신청자" content="이아론" />
        <RequestDetailItem title="학번" content="2410" />
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
