import { ButtonListPropsType } from 'types/components/Detail/ButtonListType'
import * as S from './style'

export interface changeButtonPropsType {
  renter: boolean
}

export default function ButtonList({
  equipmentStatus,
  role,
  renter,
}: ButtonListPropsType) {
  const isAdmin = role === 'admin'
  let isRenter = true
  const chageMemberButton = ({ renter }: changeButtonPropsType) => {
    return {
      NOT_RENT() {
        return <S.FillButtonWrapper>대여하기</S.FillButtonWrapper>
      },
      WAITING() {
        return renter ? (
          <S.OutlineButtonWrapper>취소하기</S.OutlineButtonWrapper>
        ) : (
          <></>
        )
      },
      RENTING() {
        return renter ? (
          <>
            <S.FillButtonWrapper>반납하기</S.FillButtonWrapper>
            <S.OutlineButtonWrapper>연장하기</S.OutlineButtonWrapper>
          </>
        ) : (
          <></>
        )
      },
      REPAIRING() {
        return <></>
      },
    }
  }

  return (
    <S.ButtonListWrapper>
      {chageMemberButton({ renter: isRenter })[equipmentStatus]()}
    </S.ButtonListWrapper>
  )
}
