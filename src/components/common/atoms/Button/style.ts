import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface BtnProps {
  fontsize: string | undefined
  border: boolean | undefined
  fontweight: string | undefined
  width: string | undefined
  height: string | undefined
  color: string | undefined
}

export const Wrapper = styled.button<BtnProps>`
  width: ${({ width }) => (width ? width + 'px' : '450px')};
  height: ${({ height }) => (height ? height + 'px' : '56px')};
  padding: 0.825rem 0;
  background: ${({ border }) => (border ? 'none' : Palette.PRIMARY_P5)};
  border: 1px solid ${Palette.PRIMARY_P5};
  border-radius: 5px;
  color: ${({ border }) => (border ? Palette.PRIMARY_P5 : Palette.NATURAL_N2)};
  font-size: ${({ fontsize }) => (fontsize ? fontsize + 'px' : '16px')};
  font-weight: ${({ fontweight }) => (fontweight ? fontweight : '700')};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  cursor: pointer;
`
