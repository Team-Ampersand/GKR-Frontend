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
