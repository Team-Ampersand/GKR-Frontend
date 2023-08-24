import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 4%;
`;

export const IconBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const NameBox = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${Palette.SUB_RED};
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8%;
  gap: 16px;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
