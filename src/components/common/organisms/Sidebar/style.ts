import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 50px;
  background: #fff;
  overflow: hidden;
`;

export const LogoBox = styled.div`
  display: flex;
  color: ${Palette.PRIMARY_P2};
  align-items: center;
  gap: 10px;
  margin-left: -60px;
  cursor: pointer;

  p {
    font-size: 30px;
    font-weight: 900;
  }
`;
