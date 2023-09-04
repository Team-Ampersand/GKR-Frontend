import styled from '@emotion/styled';
import { Palette } from 'style/global';

interface BtnProps {
  fontsize: string | undefined;
}

export const Wrapper = styled.button<BtnProps>`
  width: 100%;
  padding: 0.825rem 0;
  background: ${Palette.PRIMARY_P5};
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: ${({ fontsize }) => (fontsize ? fontsize + 'px' : '16px')};
  font-weight: 500;
  cursor: pointer;
`;
