import * as S from './style'
import * as I from 'asset/svg'

const DeleteBtn = () => {
  return (
    <S.DeleteButtonWrapper>
        <S.Title>
            삭제하기
        </S.Title>
      <S.IconBox>
        <I.Delete />
      </S.IconBox>
    </S.DeleteButtonWrapper>
  )
}

export default DeleteBtn
