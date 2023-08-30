import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    background: ${Palette.NATURAL_N2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${Palette.NATURAL_N4};
    border-radius: 10px;
  }
`;