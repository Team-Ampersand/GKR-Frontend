import { ModalPropsType } from 'types/components/Home/FilterTypes'
import * as S from './style'
import Button from 'components/common/atoms/Button'

const DeleteModal = ({ setModal }: ModalPropsType) => {
  const closeModal = () => {
    setModal((prev) => !prev)
  }
  return (
    <S.ModalWrapper>
      <S.CloseModal onClick={closeModal}></S.CloseModal>
      <S.ModalLayer>
        <S.TextWrapper>
          <S.Title>물품 삭제</S.Title>
          <p>정말로 삭제하시겠습니까?</p>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button
            text="삭제하기"
            border={true}
            fontsize="14"
            width="150"
            height="36"
            fontweight="800"
          />
          <Button
            text="취소"
            border={false}
            fontsize="14"
            width="150"
            height="36"
            fontweight="800"
            onclick={closeModal}
          />
        </S.ButtonWrapper>
      </S.ModalLayer>
    </S.ModalWrapper>
  )
}

export default DeleteModal
