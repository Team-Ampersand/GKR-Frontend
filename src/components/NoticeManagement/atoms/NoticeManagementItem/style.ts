import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const ViolationItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: ${Palette.NATURAL_N2};
  padding: 10px 30px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
export const TitleContent = styled.p`
  max-width: 20rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
`

export const Title = styled.div`
  display: flex;
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

export const Content = styled.p`
  color: ${Palette.NATURAL_N7};
  width: 70%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`

export const ButtonListWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const ButtonWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
