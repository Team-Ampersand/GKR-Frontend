import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const ButtonListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 20px;
  margin: 100px 0 0 0;
`
export const FillButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.PRIMARY_P1};
  border-radius: 5px;
  height: 44px;
  width: 180px;
  color: ${Palette.NATURAL_N2};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

export const OutlineButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Palette.PRIMARY_P1};
  border-radius: 5px;
  height: 44px;
  width: 180px;
  color: ${Palette.PRIMARY_P1};
  font-size: 16px;
  font-style: normal;
  font-weight: 00;
  line-height: normal;
  cursor: pointer;
`

export const AdminFillButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.PRIMARY_P5};
  border-radius: 5px;
  height: 44px;
  width: 180px;
  color: ${Palette.NATURAL_N2};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

export const AdminOutlineButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Palette.PRIMARY_P5};
  border-radius: 5px;
  height: 44px;
  width: 180px;
  color: ${Palette.PRIMARY_P5};
  font-size: 16px;
  font-style: normal;
  font-weight: 00;
  line-height: normal;
  cursor: pointer;
`
