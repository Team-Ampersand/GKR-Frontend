import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface tagPropsType {
  backgroundColor: string
}

interface periodPropsType {
  periodColor?: string
}

export const ListItemWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background: ${Palette.NATURAL_N2};
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const thumbnailWrapper = styled.div`
  height: 60px;
  width: 100px;
  background-color: darkblue;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Title = styled.p`
  color: ${Palette.NATURAL_N1};
  text-align: start;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 230px;
`

export const tag = styled.div<tagPropsType>`
  background-color: ${(props) => props.backgroundColor};
  width: fit-content;
  height: fit-content;
  border-radius: 100px;
  padding: 7px 20px;
  color: ${Palette.NATURAL_N2};
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

export const informationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
  margin-right: 5%;
`

export const studentWrapper = styled.div`
  color: ${Palette.NATURAL_N5};

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const periodWrapper = styled.div<periodPropsType>`
  color: ${(props) =>
    props.periodColor ? props.periodColor : Palette.NATURAL_N4};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
