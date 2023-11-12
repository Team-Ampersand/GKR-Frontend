import { ViolationItemPropsType } from 'types/components/ViolationManagement/ViolationType'
import * as S from './style'
import * as I from 'asset/svg'
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear().toString().slice(2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}
export default function ViolationItem({
  userName,
  violationReason,
  violationStartDate,
  violationEndDate,
}: ViolationItemPropsType) {
  const formattedStartDate = formatDate(violationStartDate)
  const formattedEndDate = formatDate(violationEndDate)
  return (
    <S.ViolationItemWrapper>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>[제재사항]</S.Title>
          <S.Username>{userName}</S.Username>
          <S.Date>{formattedStartDate + '~' + formattedEndDate}</S.Date>
        </S.TitleWrapper>
        <S.Content>{violationReason}</S.Content>
      </S.ContentWrapper>
      <S.MinusButtonWrapper onClick={() => {}}>
        <I.Minus />
        제재취소
      </S.MinusButtonWrapper>
    </S.ViolationItemWrapper>
  )
}
