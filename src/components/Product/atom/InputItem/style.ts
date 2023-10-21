import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const Title = styled.div`
  width: 25%;
  color: #616161;
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
    border-bottom: 2px solid #d9d9d9;
    background: none;
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 8px;
    resize: none;

    :focus {
      border: none;
      border-bottom: 2px solid ${Palette.PRIMARY_P5};
      color: #bebdbd;
    }
    ::placeholder {
      color: #bebdbd;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      bottom: 8px;
    }
  }
`
