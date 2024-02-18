import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const DetailEditWrapper = styled.div`
  display: flex;
  width: 700px;
  height: fit-content;
  background-color: ${Palette.NATURAL_N2};
  border-radius: 10px;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

export const InputListWrapper = styled.div`
  width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TypeListWrapper = styled.div`
  display: flex;
  width: 377px;
  height: fit-content auto;
  flex-wrap: wrap;
  gap: 8px 11px;
`

export const Title = styled.p`
  color: ${Palette.NATURAL_N6};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
