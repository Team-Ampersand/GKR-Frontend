import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 800px;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Palette.NATURAL_N2};

  p {
    font-size: 32px;
    font-weight: 900;
    color: ${Palette.PRIMARY_P5};
    padding-bottom: 32px;
  }
`;

export const BtnBox = styled.div`
  width: 320px;
`;
