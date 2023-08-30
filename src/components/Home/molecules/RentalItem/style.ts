import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Layer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  background: ${Palette.NATURAL_N2};
  width: 216px;
  height: fit-content;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: inset 0px 3px 8px 3px rgba(0, 0, 0, 0.25);
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Description = styled.small`
  color: ${Palette.NATURAL_N5};
`;

export const Tag = styled.small`
  color: ${Palette.NATURAL_N5};
`;
