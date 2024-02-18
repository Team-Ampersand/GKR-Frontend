import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface ChoiceProps {
  active: boolean
  admin: boolean
}

export const Wrapper = styled.div`
  display: flex;
  height: fit-content auto;
`

export const Item = styled.button<ChoiceProps>`
  color: ${(props: ChoiceProps) =>
    props.active
      ? props.admin
        ? Palette.PRIMARY_P5
        : Palette.PRIMARY_P1
      : Palette.NATURAL_N4};
  border: none;
  border-bottom: ${(props: ChoiceProps) =>
    props.active
      ? `2px solid ${props.admin ? Palette.PRIMARY_P5 : Palette.PRIMARY_P1}`
      : 'none'};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  background: none;
`
