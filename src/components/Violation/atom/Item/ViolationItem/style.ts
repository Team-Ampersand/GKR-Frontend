import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const ViolationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  background: ${Palette.NATURAL_N2};
  padding: 15px 24px;
  gap: 10px;
`

export const Top = styled.div`
  width: fit-content;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.p`
  width: fit-content;
  color: ${Palette.NATURAL_N2};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`

export const Date = styled.p`
  color: ${Palette.NATURAL_N7};
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`

export const Content = styled.p`
  width: 70%;
  height: 30px;
  overflow: hidden;
  color: ${Palette.NATURAL_N7};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`
