import styled from '@emotion/styled'

export const AddNoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
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
    border: 2px solid #d9d9d9;
    border-radius: 5px;
    resize: none;
    min-height: 90px;
    ::placeholder {
      color: #bebdbd;
    }
  }
  textarea:focus {
    border: 2px solid #865dff;
  }
`

export const Title = styled.div`
  color: #525252;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const subTitle = styled.div`
  color: #616161;
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
  border: 1px solid #d9d9d9;
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
  color: #c2c2c2;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center;
`
