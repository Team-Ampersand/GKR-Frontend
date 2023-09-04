import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  color: ${Palette.NATURAL_N4};
  font-size: 16px;
  font-weight: 700;
`;

export const Input = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-radius: 8px;
  border: 1px solid ${Palette.NATURAL_N3};
  background: ${Palette.BACKGROUND_BG};
  color: ${Palette.NATURAL_N5};
  font-size: 14px;
  font-weight: 500;
`;
