import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const VerticalScrollBar = styled.div`
  ::-webkit-scrollbar {
    width: 6px;
    background: ${Palette.NATURAL_N2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${Palette.NATURAL_N4};
    border-radius: 10px;
  }
`;

export const HorizontalScrollBar = styled(VerticalScrollBar)`
  ::-webkit-scrollbar {
    height: 6px;
  }
`;
