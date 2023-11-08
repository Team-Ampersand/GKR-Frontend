import * as S from './style'
import { ChiceItemPropsType } from 'types/components/Rental/RentalType'
const ChoiceItem = ({ name, setValue, value }: ChiceItemPropsType) => {
  return (
    <S.Wrapper>
      <S.Item
        onClick={() => {
          setValue(name)
        }}
        active={value === name}
      >
        {name}
      </S.Item>
    </S.Wrapper>
  )
}
export default ChoiceItem
