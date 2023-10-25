import { useRecoilValue } from 'recoil'
import * as S from './style'
import * as I from 'asset/svg'
import { DeleteChoice } from 'recoilAtoms'
import { useEffect, useState } from 'react'
import { ModalPropsType } from 'types/components/Home/FilterTypes'

const DeleteBtn = ({ setModal }: ModalPropsType) => {
  const DeleteIds = useRecoilValue(DeleteChoice)

  const [color, setColor] = useState('')

  const openModal = () => {
    setModal((prev) => !prev)
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
