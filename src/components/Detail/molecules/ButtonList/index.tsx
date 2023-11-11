import { ButtonListPropsType } from 'types/components/Detail/ButtonListType'
import * as S from './style'

export interface changeButtonPropsType {
  isRenter: boolean
}

export default function ButtonList({
  equipmentStatus,
  renter,
  role,
}: ButtonListPropsType) {
  const changeMemberButton = ({ isRenter }: changeButtonPropsType) => {
    return {
      NOT_RENT() {
        return <S.FillButtonWrapper>대여하기</S.FillButtonWrapper>
      },
      WAITING() {
        return isRenter ? (
          <S.OutlineButtonWrapper>취소하기</S.OutlineButtonWrapper>
        ) : (
          <></>
        )
      },
      RENTING() {
        return isRenter ? (
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

  const changeAdminButton = () => {
    return {
      NOT_RENT() {
        return <S.AdminFillButtonWrapper>수리등록</S.AdminFillButtonWrapper>
      },
      WAITING() {
        return <></>
      },
      RENTING() {
        return <></>
      },
      REPAIRING() {
        return (
          <S.AdminOutlineButtonWrapper>수리취소</S.AdminOutlineButtonWrapper>
        )
      },
    }
  }

  return (
    <S.ButtonListWrapper>
      {equipmentStatus
        ? role === 'admin'
          ? changeAdminButton()[equipmentStatus]()
          : changeMemberButton({ isRenter: renter })[equipmentStatus]()
        : null}
    </S.ButtonListWrapper>
  )
}
