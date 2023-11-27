import Button from 'components/common/atoms/Button'
import * as S from './style'
import React from 'react'

interface ResonModalPropsType {
  reason: string
  setReason: React.Dispatch<React.SetStateAction<string>>
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
  onClick: () => void
}

export default function ResonModal({
  reason,
  setReason,
  setModalState,
  onClick,
}: ResonModalPropsType) {
  return (
    <S.ReasonModalWrapper>
      <S.closeModalWrapper onClick={() => setModalState(false)} />
      <S.ModalWrapper>
        <S.Title>사유작성</S.Title>
        <S.ReasonWrapper>
          <S.subTitle>사유</S.subTitle>
          <S.TextArea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="사유를 적어주세요"
          />
        </S.ReasonWrapper>
        <S.FillButtonWrapper onClick={onClick}>제출하기</S.FillButtonWrapper>
      </S.ModalWrapper>
    </S.ReasonModalWrapper>
  )
}
