import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const RentalWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const LineWrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Palette.NATURAL_N4};
  margin-bottom: 0.5rem;
`

export const ToolBox = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  flex-direction: row-reverse;
`
