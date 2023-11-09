import { RequestButtonList } from 'types/components/Request/RequestDetailType'
import * as S from './style'

export default function RequsetButtonList({
  orderType,
  id,
}: RequestButtonList) {
  const changeButton = () => {
    return {
      RENTAL() {
        return <S.AdminFillButtonWrapper>대여수락</S.AdminFillButtonWrapper>
      },
      RETURN() {
        return <S.AdminFillButtonWrapper>반납확인</S.AdminFillButtonWrapper>
      },
      EXTENSION() {
        return <S.AdminFillButtonWrapper>연장수락</S.AdminFillButtonWrapper>
      },
    }
  }
  return (
    <S.ButtonListWrapper>
      <>{changeButton()[orderType]()}</>
      <S.AdminOutlineButtonWrapper>거절</S.AdminOutlineButtonWrapper>
    </S.ButtonListWrapper>
  )
}
