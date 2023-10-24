import { useRecoilValue } from 'recoil'
import * as S from './style'
import * as I from 'asset/svg'
import { DeleteChoice } from 'recoilAtoms'
import { useEffect, useState } from 'react'

const DeleteBtn = () => {
  const DeleteIds = useRecoilValue(DeleteChoice)

  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(DeleteIds.length > 0 ? '#FF6464' : '#999')
  }, [DeleteIds])

  return (
    <S.DeleteButtonWrapper>
      <S.Title color={color}>삭제하기</S.Title>
      <S.IconBox>
        <I.Delete strok={color} />
      </S.IconBox>
    </S.DeleteButtonWrapper>
  )
}

export default DeleteBtn
