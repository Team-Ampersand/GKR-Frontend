import IsAdmin from 'utils/IsAdmin'
import * as S from './style'
import { ChiceItemPropsType } from 'types/components/Rental/RentalType'
const ChoiceItem = ({ name, setValue, value }: ChiceItemPropsType) => {
  const role = IsAdmin()
  return (
    <S.Wrapper>
      <S.Item
        onClick={() => {
          setValue(name)
        }}
        active={value === name}
        admin={role}
      >
        {name}
      </S.Item>
    </S.Wrapper>
  )
}
export default ChoiceItem
