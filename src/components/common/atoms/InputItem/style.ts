import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
`
export const Title = styled.div`
  width: 25%;
  color: ${Palette.NATURAL_N6};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`

export const Input = styled.div`
  width: 100%;
  margin-top: 28px;

  textarea {
    width: 100%;
    border: none;
    border-bottom: 2px solid ${Palette.NATURAL_N3};
    background: none;
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 8px;
    resize: none;

    :focus {
      border: none;
      border-bottom: 2px solid ${Palette.PRIMARY_P5};
      color: ${Palette.NATURAL_N8};
    }
    ::placeholder {
      color: ${Palette.NATURAL_N4};
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      bottom: 8px;
    }
  }
`
