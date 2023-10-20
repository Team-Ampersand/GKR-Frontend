import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 100%;
  height: 480px;
  background: #fafafa;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  P {
    width: 130px;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    color: ${Palette.NATURAL_N4};
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
