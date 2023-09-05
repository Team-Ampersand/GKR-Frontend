import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 800px;
  padding: 48px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Palette.NATURAL_N2};

  > p {
    font-size: 32px;
    font-weight: 900;
    color: ${Palette.PRIMARY_P5};
    padding-bottom: 32px;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  img {
    border-radius: 16px;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid ${Palette.NATURAL_N4};
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  background: ${Palette.NATURAL_N3};
  border-radius: 50px;
`;

export const InfoBox = styled.div`
  color: #999;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 6px;
  p {
    font-size: 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 1.5rem 0 20rem;

  p {
    font-size: 16px;
    font-weight: 900;
    color: ${Palette.NATURAL_N4};
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;
