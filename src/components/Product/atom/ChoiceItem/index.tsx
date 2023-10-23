import { useRecoilState } from 'recoil'
import * as S from './style'
import { ProductChoice } from 'recoilAtoms'
import { ChoiceItemProps } from 'types/Product/ProductTypes'

const ChoiceItem = ({ name }: ChoiceItemProps) => {
  const [ChoiceName, setChoiceName] = useRecoilState(ProductChoice)
  return (
    <S.Wrapper>
      <S.Item
        onClick={() => {
          setChoiceName(name)
        }}
        active={ChoiceName === name}
      >
        {name}
      </S.Item>
    </S.Wrapper>
  )
}
export default ChoiceItem
