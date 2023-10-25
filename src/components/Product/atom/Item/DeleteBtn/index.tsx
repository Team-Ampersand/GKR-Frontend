import { useRecoilValue } from 'recoil'
import * as S from './style'
import * as I from 'asset/svg'
import { DeleteChoice } from 'recoilAtoms'
import { useEffect, useState } from 'react'
import { ModalPropsType } from 'types/components/Home/FilterTypes'
import { toast } from 'react-toastify'

const DeleteBtn = ({ setModal }: ModalPropsType) => {
  const DeleteIds = useRecoilValue(DeleteChoice)

  const [color, setColor] = useState('')

  const openModal = () => {
    if (DeleteIds.length > 0) setModal((prev) => !prev)
    else toast.error('삭제할 물품을 선택해 주세요')
  }

  useEffect(() => {
    setColor(DeleteIds.length > 0 ? '#FF6464' : '#999')
  }, [DeleteIds])

  return (
    <S.DeleteButtonWrapper onClick={openModal}>
      <S.Title color={color}>삭제하기</S.Title>
      <S.IconBox>
        <I.Delete strok={color} />
      </S.IconBox>
    </S.DeleteButtonWrapper>
  )
}

export default DeleteBtn
