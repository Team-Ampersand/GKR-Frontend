import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid ${Palette.NATURAL_N3};
  background: ${Palette.NATURAL_N2};
  display: flex;
  cursor: pointer;
  margin-top: 60px;
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  P {
    color: ${Palette.NATURAL_N4};
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }
`

export const ImgInput = styled.input`
  display: none;
`

export const ImgLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const Caution = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    color: ${Palette.NATURAL_N6};
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    margin-left: 6px;
  }
`

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
