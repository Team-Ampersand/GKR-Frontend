import styled from '@emotion/styled'

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
  background-color: #fff;
  height: fit-content;
  width: 540px;
  padding: 30px 50px;
  border-radius: 5px;
  gap: 20px;
`

export const Title = styled.div`
  color: #525252;
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
  color: #616161;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const FillButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6000;
  border-radius: 5px;
  height: 54px;
  width: auto;
  color: #fff;
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
  border: #ff6000 2px solid;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 14px;
  ::placeholder {
    color: #ff6000;
  }
`
