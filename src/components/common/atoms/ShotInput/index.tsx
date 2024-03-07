import { ShotInputPropsType } from 'types/components/common/ShotInputType'
import * as S from './style'
import { useState } from 'react'
import { Palette } from 'style/global'

export default function ShotInput({
  value,
  setValue,
  placeholder,
}: ShotInputPropsType) {
  const [color, setColor] = useState(Palette.NATURAL_N3)
  return (
    <S.ShotInputWrapper>
      <S.Input
        value={value}
        onSelect={() => {
          setColor(Palette.PRIMARY_P5)
        }}
        onBlur={() => {
          setColor(Palette.NATURAL_N3)
        }}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <S.Line backgroundColor={color} />
    </S.ShotInputWrapper>
  )
}
