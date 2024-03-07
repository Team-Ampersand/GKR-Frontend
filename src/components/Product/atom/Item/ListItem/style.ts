import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface ButtonProps {
  active: boolean
}

export const Wrapper = styled.div``

export const Button = styled.button<ButtonProps>`
  height: 36px;
  background: ${(props: ButtonProps) =>
    props.active ? Palette.PRIMARY_P5 : Palette.NATURAL_N2};
  border: solid 1px ${Palette.NATURAL_N3};
  border-radius: 5px;
  padding: 0 18px;
  color: ${(props: ButtonProps) =>
    props.active ? Palette.NATURAL_N2 : Palette.NATURAL_N4};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`
