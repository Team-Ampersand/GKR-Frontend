import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const AddViolation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.NATURAL_N2};
  height: fit-content;
  width: 540px;
  padding: 30px 50px;
  border-radius: 5px;
  gap: 50px;
`

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.div`
  color: ${Palette.NATURAL_N8};
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const subTitle = styled.div`
  color: ${Palette.NATURAL_N6};
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const PaddingWrapper = styled.div`
  width: 100%;
  height: 140px;
`
