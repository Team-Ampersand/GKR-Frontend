import styled from '@emotion/styled'
import { Palette } from 'style/global'
interface FilterItemPropstype {
  value: boolean
  role: 'member' | 'admin'
}

export const FilterItemWrapper = styled.div<FilterItemPropstype>`
  height: fit-content;
  width: fit-content;
  padding: 0.6rem 1.1rem;
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.value
      ? props.role === 'admin'
        ? Palette.PRIMARY_P5
        : Palette.PRIMARY_P2
      : 'none'};
  color: ${(props) => (props.value ? Palette.NATURAL_N2 : Palette.NATURAL_N4)};
  font-size: 14px;
  font-weight: 600;
  border: 1px solid
    ${(props) => (props.value ? Palette.NATURAL_N2 : Palette.NATURAL_N3)};
  cursor: pointer;
`
