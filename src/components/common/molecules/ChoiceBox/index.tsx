import ChoiceItem from 'components/Rental/atoms/ChoiceItem'
import * as S from './style'
import { ChiceBoxPropsType } from 'types/components/Rental/RentalType'
const ChoiceBox = ({ data, setValue, value }: ChiceBoxPropsType) => {
  return (
    <S.Wrapper>
      <S.ChoiceBox>
        {data.map((i) => (
          <ChoiceItem key={i} name={i} setValue={setValue} value={value} />
        ))}
      </S.ChoiceBox>
    </S.Wrapper>
  )
}

export default ChoiceBox
