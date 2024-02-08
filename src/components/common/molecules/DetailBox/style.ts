import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  min-height: 800px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${Palette.NATURAL_N2};
  padding: 30px 50px;
  gap: 20px;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Title = styled.p`
  width: 100%;
  color: ${Palette.NATURAL_N1};
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const date = styled.p`
  color: ${Palette.NATURAL_N7};
  font-size: 15px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`

export const ContentsWrapper = styled.div`
  color: ${Palette.NATURAL_N6};
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  min-height: 200px;
`
