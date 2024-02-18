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

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const TopTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditButton = styled.div`
  display: flex;
  align-items: center;
  color: ${Palette.PRIMARY_P5};
  border: 1.5px solid ${Palette.PRIMARY_P5};
  border-radius: 5px;
  justify-content: space-around;
  width: 100px;
  height: 30px;
  cursor: pointer;
`

export const Title = styled.p`
  color: ${Palette.NATURAL_N1};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const TagListWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const ContentsWrapper = styled.div`
  color: #656565;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  min-height: 200px;
`
