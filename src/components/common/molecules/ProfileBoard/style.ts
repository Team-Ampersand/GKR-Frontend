import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 6%;
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background: ${Palette.NATURAL_N2};
  border-radius: 50px;
`;

export const InfoBox = styled.div`
  color: #999;
  font-size: 20px;
  font-weight: 700;
  p {
    font-size: 15px;
  }
`;
