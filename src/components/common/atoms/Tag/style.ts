import styled from '@emotion/styled'
import { Palette } from 'style/global'
interface tagWrapperProps {
  BackgroundColor: string
}

export const tagWrapper = styled.div<tagWrapperProps>`
  background-color: ${(props) => props.BackgroundColor};
  width: 4rem;
  height: 1.5rem;
  font-size: 10px;
  font-weight: 900;
  color: ${Palette.NATURAL_N2};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
