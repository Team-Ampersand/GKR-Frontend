import styled from '@emotion/styled'

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const CloseModal = styled.div`
  position: absolute;
  display: flex;
  background: rgba(25, 25, 25, 0.1);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

export const ModalLayer = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 8px;

  p {
    color: #999;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`

export const Title = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 700;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
