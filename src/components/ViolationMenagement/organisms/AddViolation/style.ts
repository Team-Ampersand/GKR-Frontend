import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Positioner = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 2fr 1.1fr;
`

export const AddViolation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.NATURAL_N2};
  height: fit-content;
  padding: 30px 2.2rem;
  border-radius: 5px;
  gap: 50px;
  height: 70vh;
`

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  textarea {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    border: 2px solid ${Palette.NATURAL_N3};
    border-radius: 5px;
    resize: none;
    min-height: 200px;
    ::placeholder {
      color: #bebdbd;
    }
  }
  textarea:focus {
    border: 2px solid ${Palette.PRIMARY_P5};
  }
`

export const Title = styled.div`
  color: ${Palette.NATURAL_N8};
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const subTitle = styled.div`
  color: ${Palette.NATURAL_N6};
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const PaddingWrapper = styled.div`
  width: 100%;
  height: 140px;
`
