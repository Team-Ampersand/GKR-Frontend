import ChoiceItem from 'components/Product/atom/Item/ChoiceItem'
import * as S from './style'

const ChoiceBox = () => {
  return (
    <S.Wrapper>
      <S.ChoiceBox>
        <ChoiceItem name="물품 등록하기" />
        <ChoiceItem name="물품 삭제하기" />
      </S.ChoiceBox>
    </S.Wrapper>
  )
}

export default ChoiceBox
