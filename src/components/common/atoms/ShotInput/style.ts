import styled from '@emotion/styled'

interface LinePropstype {
  backgroundColor: string
}

export const ShotInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: #bebdbd;
  }
`

export const Line = styled.div<LinePropstype>`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.backgroundColor};
`
