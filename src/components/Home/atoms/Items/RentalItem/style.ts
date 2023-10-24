import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Layer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 3px 8px 0px rgba(112, 144, 176, 0.15);
  background: ${Palette.NATURAL_N2};
  width: 230px;
  height: 280px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-1%);
    box-shadow: 0px 3px 8px 3px rgba(112, 144, 176, 0.15);
  }
`;

export const Check = styled.input`
`

export const imageFrameWrapper = styled.div`
  width: 100%;
  height: 52%;
  background-color:#F7F7F9;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const Title = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 1.125rem;
`
export const TitleWrapper = styled.div`
 width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
export const descriptionWrapper = styled.div`
  font-weight: 300;
  color: #999;
`
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 48%;
  width: 100%;
  
  `;

export const TagListWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap:0.3rem;
`