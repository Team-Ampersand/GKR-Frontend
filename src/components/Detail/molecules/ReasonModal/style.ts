import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const ReasonModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const closeModalWrapper = styled.div`
  position: absolute;
  display: flex;
  background: rgba(25, 25, 25, 0.1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const ModalWrapper = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  background-color: ${Palette.NATURAL_N2};
  height: fit-content;
  width: 540px;
  padding: 30px 50px;
  border-radius: 5px;
  gap: 20px;
`

export const Title = styled.div`
  color: ${Palette.NATURAL_N8};
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const ReasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const subTitle = styled.div`
  color: ${Palette.NATURAL_N6};
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const FillButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.PRIMARY_P1};
  border-radius: 5px;
  height: 54px;
  width: auto;
  color: ${Palette.NATURAL_N2};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  width: auto;
  min-height: 200px;
  resize: none;
  border: ${Palette.PRIMARY_P1} 2px solid;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 14px;
  ::placeholder {
    color: ${Palette.PRIMARY_P1};
  }
`
