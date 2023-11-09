import { ShotInputPropsType } from 'types/components/common/ShotInputType'
import * as S from './style'

export default function ShotInput({
  value,
  setValue,
  placeholder,
}: ShotInputPropsType) {
  return (
    <S.ShotInputWrapper>
      <S.Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <S.Line />
    </S.ShotInputWrapper>
  )
}
