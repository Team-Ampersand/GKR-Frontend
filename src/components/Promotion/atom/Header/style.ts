import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${Palette.PRIMARY_P2};
  margin-left: -85px;

  p {
    font-size: 50px;
    font-weight: 900;
  }
`;

export const Description = styled.div`
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: ${Palette.PRIMARY_P2};
  padding: 48px 0 150px 0;
`;
