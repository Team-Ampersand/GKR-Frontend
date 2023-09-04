import styled from '@emotion/styled';
import { Palette } from 'style/global';

interface ItemProps {
  isOverdue?: boolean | undefined;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  background: ${Palette.NATURAL_N2};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const LeftBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 110px;
    height: 100%;
    background-size: cover;
  }
`;

export const InfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  font-size: 8px;
  color: ${Palette.NATURAL_N5};

  > :nth-child(1) {
    font-size: 16px;
    font-weight: 800;
    color: ${Palette.NATURAL_N1};
  }
`;

export const CenterBox = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-weight: 400;
    color: ${Palette.NATURAL_N4};
  }
`;

export const RightBox = styled.div<ItemProps>`
  font-size: 12px;
  font-weight: 400;
  color: ${({ isOverdue }) =>
    isOverdue ? Palette.NATURAL_N5 : Palette.SUB_RED};
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
`;
