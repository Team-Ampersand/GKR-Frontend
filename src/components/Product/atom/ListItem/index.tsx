import Button from 'components/common/atoms/Button'
import * as S from './style'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { ProductList } from 'recoilAtoms'

interface ListProps {
  name: string
  width?: string
}

const ListItem = ({ name, width }: ListProps) => {
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
