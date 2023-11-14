import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background: #fff;
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
    color: #c2c2c2;
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
    color: #616161;
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
