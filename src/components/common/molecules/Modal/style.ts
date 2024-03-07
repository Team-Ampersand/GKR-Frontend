import styled from '@emotion/styled'

export const ModalWrapper = styled.div``

interface ModalBackgroundProps {
  hidden: boolean
}

export const ModalBackground = styled.div<ModalBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  ${({ hidden }) =>
    hidden &&
    `
      display: none;
    `}
`

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  z-index: 20;
  transform: translate(-50%, -50%);

  ${({ hidden }) =>
    hidden &&
    `
      display: none;
    `}
`
