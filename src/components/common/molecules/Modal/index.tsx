import useModal from 'hook/useModal'
import { useRecoilState } from 'recoil'
import { IsModal } from 'recoilAtoms'
import ModalView from './View'

const Modal = () => {
  const [modal] = useRecoilState(IsModal)
  const { closeModal } = useModal()

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.()
        if (!modal.manualClose) {
          closeModal()
        }
      }}
    />
  )
}
export default Modal
