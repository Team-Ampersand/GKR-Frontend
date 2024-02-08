import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const RentalWrapper = styled.div`
  width: 100%;
  height: fit-content;
  ::-webkit-scrollbar {
    width: 6px;
    background: ${Palette.NATURAL_N2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${Palette.NATURAL_N4};
    border-radius: 10px;
  }
`

export const LineWrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Palette.NATURAL_N4};
  margin-bottom: 0.5rem;
`
