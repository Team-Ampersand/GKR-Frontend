import { ViolationItemPropsType } from 'types/components/ViolationManagement/ViolationType'
import * as S from './style'
import * as I from 'asset/svg'
export default function ViolationItem({
  userName,
  violationReason,
  violationStartDate,
  violationEndDate,
}: ViolationItemPropsType) {
  return (
    <S.ViolationItemWrapper>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>[제재사항]</S.Title>
          <S.Username>{userName}</S.Username>
          <S.Date>{violationStartDate + '~' + violationEndDate}</S.Date>
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
