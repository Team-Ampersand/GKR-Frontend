import { ShotInputPropsType } from 'types/components/common/ShotInputType'
import * as S from './style'
import { useState } from 'react'

export default function ShotInput({
  value,
  setValue,
  placeholder,
}: ShotInputPropsType) {
  const [color, setColor] = useState('#D9D9D9')
  return (
    <S.ShotInputWrapper>
      <S.Input
        value={value}
        onSelect={() => {
          setColor('#865DFF')
        }}
        onBlur={() => {
          setColor('#D9D9D9')
        }}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <S.Line backgroundColor={color} />
    </S.ShotInputWrapper>
  )
}
