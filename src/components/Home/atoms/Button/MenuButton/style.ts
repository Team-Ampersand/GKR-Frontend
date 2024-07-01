import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Layer = styled.button<{ role: string; selected: boolean }>`
  padding: 2px 27px;
  border-radius: 8px;
  font-size: 20px;
  border: 1px solid ${Palette.NATURAL_N3};
  color: ${({ role, selected }) =>
    selected
      ? Palette.NATURAL_N2
      : role !== 'ROLE_STUDENT'
      ? Palette.PRIMARY_P5
      : Palette.PRIMARY_P1};
  background: ${({ role, selected }) =>
    !selected
      ? Palette.NATURAL_N2
      : role !== 'ROLE_STUDENT'
      ? Palette.PRIMARY_P5
      : Palette.PRIMARY_P1};
  cursor: pointer;

  :hover {
    box-shadow: inset 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  }
`
