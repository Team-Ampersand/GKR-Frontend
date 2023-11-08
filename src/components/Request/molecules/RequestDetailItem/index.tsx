import { RequestDetailItemPropsType } from 'types/components/Request/RequestDetailType'
import * as S from './style'

export default function RequestDetailItem({
  title,
  content,
}: RequestDetailItemPropsType) {
  return (
    <S.RequestContentItem>
      <S.RequsetSubTitle>{title}</S.RequsetSubTitle>
      <S.ContentWrapper>{content}</S.ContentWrapper>
    </S.RequestContentItem>
  )
}
