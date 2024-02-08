import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const DetailWrapper = styled.div`
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

export const Title = styled.p`
  color: ${Palette.NATURAL_N2};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const ContentsWrapper = styled.div`
  color: #656565;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  min-height: 200px;
`
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Palette.NATURAL_N3};
`
export const RequestContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
