import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Label = styled.label`
  position: relative;
  width: 640px;
  height: 48px;
  margin: 0 auto 60px auto;
`

export const Input = styled.input<{ role: string }>`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 1px solid #e1e1e1;
  color: ${Palette.NATURAL_N4};
  padding: 12px 24px;
  transition: all 0.3s;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: ${Palette.NATURAL_N3};
    font-size: 16px;
  }

  :focus {
    border: 0.5px solid
      ${({ role }) =>
        role === 'ROLE_ADMIN' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
    color: ${Palette.NATURAL_N1};
  }
`
