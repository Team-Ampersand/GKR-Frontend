import { useRecoilState } from 'recoil'
import * as S from './style'
import { ProductChoice } from 'recoilAtoms'

interface ChoiceItemProps {
  name: string
}

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
