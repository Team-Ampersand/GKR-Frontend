import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const ViolationItemWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Palette.NATURAL_N2};
  padding: 10px 20px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap: 15px;
`

export const Title = styled.p`
  color: ${Palette.NATURAL_N1};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Username = styled.p`
  color: ${Palette.NATURAL_N7};
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const Date = styled.p`
  color: ${Palette.NATURAL_N7};
  font-size: 15px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`

export const Content = styled.div`
  color: ${Palette.NATURAL_N7};
  width: 70%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const MinusButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  color: #f00;
`
