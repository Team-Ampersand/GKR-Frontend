import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 27%;
  background: ${Palette.NATURAL_N2};
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  p {
    font-size: 24px;
    font-weight: 800;
    color: ${Palette.PRIMARY_P5};
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
