import { IsModal } from 'recoilAtoms'
import { ReactNode, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { modalDataType } from 'types/hooks/useModal'

const useModal = () => {
  const [modal, setModal] = useRecoilState(IsModal)

  const openModal = useCallback(
    (modalData: modalDataType) => {
      setModal({
        ...modalData,
        visible: true,
      })
    },
    [setModal],
  )

  const closeModal = useCallback(() => {
    setModal({
      component: null,
      visible: false,
    })
  }, [setModal])

  return { openModal, closeModal, visible: !!modal.visible }
}

export default useModal
