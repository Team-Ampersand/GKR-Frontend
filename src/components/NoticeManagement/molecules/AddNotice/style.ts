import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const AddNoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.NATURAL_N2};
  height: fit-content;
  width: 540px;
  padding: 30px 50px;
  border-radius: 5px;
  gap: 50px;
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
    min-height: 90px;
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
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const subTitle = styled.div`
  color: ${Palette.NATURAL_N6};
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const ImageInput = styled.input`
  display: none;
`

export const PreviewWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${Palette.NATURAL_N3};
`

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const defaultImage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Palette.NATURAL_N4};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center;
`
