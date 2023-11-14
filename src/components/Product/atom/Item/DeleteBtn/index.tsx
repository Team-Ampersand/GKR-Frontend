import * as I from 'asset/svg'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import { DeleteChoice } from 'recoilAtoms'
import { ModalPropsType } from 'types/components/Home/FilterTypes'
import toastOption from 'utils/libs/toastOption'
import * as S from './style'
interface DeleteBtnPropsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteBtn = ({ setModal }: DeleteBtnPropsType) => {
  const DeleteIds = useRecoilValue(DeleteChoice)
  const [color, setColor] = useState('')
  const openModal = () => {
    if (DeleteIds.length > 0) setModal((prev) => !prev)
    else toast.error('삭제할 물품을 선택해 주세요', toastOption)
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
