import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface TitleColorType {
  color: string
}

export const DeleteButtonWrapper = styled.div`
  display: flex;
  width: 134px;
  height: 48px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${Palette.NATURAL_N2};
  align-items: center;
  justify-content: center;
`

export const Title = styled.p<TitleColorType>`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.color};
`

export const IconBox = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  margin-left: 3px;
`
