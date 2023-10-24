import { useRecoilValue } from 'recoil'
import * as S from './style'
import * as I from 'asset/svg'
import { DeleteChoice } from 'recoilAtoms'

const DeleteBtn = () => {
  const id = useRecoilValue(DeleteChoice)

  return (
    <S.DeleteButtonWrapper>
      <S.Title>삭제하기</S.Title>
      <S.IconBox>
        <I.Delete />
      </S.IconBox>
    </S.DeleteButtonWrapper>
  )
}

export default DeleteBtn
