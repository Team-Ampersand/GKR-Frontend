import styled from '@emotion/styled';
import { Palette } from 'style/global';

interface Props {
  role: 'admin' | 'member';
}

export const Layer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  width: 30%;
  background: ${Palette.NATURAL_N2};
  position: relative;
`;

export const Submit = styled.button<Props>`
  width: 100%;
  line-height: 48px;
  background-color: ${({ role }) =>
    role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
  border-radius: 8px;
  border: none;
  color: ${Palette.NATURAL_N2};
  font-size: 16px;
`;

export const CalendarBox = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 40%;
`;
