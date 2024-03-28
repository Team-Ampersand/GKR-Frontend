import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 90%;
  gap: 8px;
  padding: 16px 46px 16px 16px;
  box-shadow: 0px 0px 5px 0px rgba(112, 144, 176, 0.15);
`

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Palette.NATURAL_N1};
  font-size: 1.125rem;
  font-weight: 400;
  h2 {
    font-size: 18px;
  }
  p {
    color: #757575;
    font-size: 0.925rem;
    font-weight: 400;
  }
  div {
    display: flex;
    gap: 0.2rem;
  }
`
export const ViolationTag = styled.div`
  background-color: ${Palette.PRIMARY_P1};
  border-radius: 7px;
  font-size: 13px;
  padding: 0.2rem 0.5rem;
  width: fit-content;
  height: fit-content;
  color: ${Palette.NATURAL_N2};
`
