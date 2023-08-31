import styled from '@emotion/styled';
import { Palette } from 'style/global';

interface TextStyle {
  active: boolean;
}

export const Wrapper = styled.div`
  margin: 3rem 0 1.5rem 4rem;
  display: flex;
  gap: 40px;
  align-items: flex-end;
`;

export const Text = styled.div<TextStyle>`
  font-weight: 800;
  color: ${({ active }) => (active ? Palette.PRIMARY_P5 : Palette.NATURAL_N4)};
  font-size: ${({ active }) => (active ? '32px' : '28px')};
  border-bottom: 1px solid
    ${({ active }) => (active ? '#000' : Palette.BACKGROUND_BG)};
  cursor: pointer;
`;
