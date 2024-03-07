import { modalDataType } from 'types/hooks/useModal'
import * as S from './style'

const ModalView = ({ component, visible, onClose }: modalDataType) => {
  return (
    <S.ModalWrapper>
      <S.ModalBackground hidden={!visible} onClick={onClose} />
      <S.ModalBox>{component}</S.ModalBox>
    </S.ModalWrapper>
  )
}

export default ModalView
