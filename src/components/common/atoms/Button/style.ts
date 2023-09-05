import styled from '@emotion/styled';
import { Palette } from 'style/global';

interface BtnProps {
  fontsize: string | undefined;
  border: boolean | undefined;
}

export const Wrapper = styled.button<BtnProps>`
  width: 100%;
  padding: 0.825rem 0;
  background: ${({ border }) =>
    border == true ? Palette.NATURAL_N2 : Palette.PRIMARY_P5};
  border: 2px solid ${Palette.PRIMARY_P5};
  border-radius: 10px;
  color: ${({ border }) => (border ? Palette.PRIMARY_P5 : Palette.NATURAL_N2)};
  font-size: ${({ fontsize }) => (fontsize ? fontsize + 'px' : '16px')};
  font-weight: 500;
  cursor: pointer;
`;
