import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  background: ${Palette.BACKGROUND_BG};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const LeftBox = styled.div`
  width: 40%;
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

export const ImgBox = styled.div`
  position: relative;
  width: 112px;
  height: 100%;
  img {
    border-radius: 8px;
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
  width: 40%;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 12px;
  p {
    font-weight: 400;
    color: ${Palette.NATURAL_N5};
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const RightBox = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${Palette.NATURAL_N5};
`;
