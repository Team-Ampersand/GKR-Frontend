import styled from '@emotion/styled'

export const ViolationItemWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
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
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Username = styled.p`
  color: #818198;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const Date = styled.p`
  color: #818198;
  font-size: 15px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`

export const Content = styled.div`
  color: #818198;
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
