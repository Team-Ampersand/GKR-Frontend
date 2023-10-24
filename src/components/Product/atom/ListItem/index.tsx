import { useRecoilState } from 'recoil'
import { ProductList } from 'recoilAtoms'
import { ListItemProps } from 'types/Product/ProductTypes'
import * as S from './style'

const ListItem = ({ name, width }: ListItemProps) => {
  const [PrductName, setProductName] = useRecoilState(ProductList)

  return (
    <S.Wrapper>
      <S.Button
        width={width}
        onClick={() => {
          setProductName(name)
        }}
        active={PrductName === name}
      >
        {name}
      </S.Button>
    </S.Wrapper>
  )
}

export default ListItem
