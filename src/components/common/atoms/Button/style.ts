import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface BtnProps {
  fontsize: string | undefined
  border: boolean | undefined
  fontweight: string | undefined
}

export const Wrapper = styled.button<BtnProps>`
  width: 450px;
  height: 56px;
  padding: 0.825rem 0;
  background: ${({ border }) =>
    border == true ? Palette.NATURAL_N2 : Palette.PRIMARY_P5};
  border: 2px solid ${Palette.PRIMARY_P5};
  border-radius: 5px;
  color: ${({ border }) => (border ? Palette.PRIMARY_P5 : Palette.NATURAL_N2)};
  font-size: ${({ fontsize }) => (fontsize ? fontsize + 'px' : '16px')};
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`
