import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const MainTemplates = styled.div`
  width: calc(100% - 250px);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 0 3vw 0 3vw;
  overflow-x: hidden;
`;

export const CommonTemplate = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Palette.BACKGROUND_BG};
`;
