import Button from 'components/common/atoms/Button'
import * as S from './style'
import { useState } from 'react'

interface ListProps {
  name: string
  width?: string
}

const ListItem = ({ name, width }: ListProps) => {
  const [btnCheck, SetBtnCheck] = useState(false)

  return (
    <S.Wrapper>
      <S.Button
        width={width}
        onClick={() => {
          SetBtnCheck(true)
        }}
        active={btnCheck}
      >
        {name}
      </S.Button>
    </S.Wrapper>
  )
}

export default ListItem
