import styled from '@emotion/styled'

interface ButtonProps {
  active: boolean
}

export const Wrapper = styled.div``

export const Button = styled.button<ButtonProps>`
  height: 36px;
  background: ${(props: ButtonProps) => (props.active ? '#865DFF' : '#fff')};
  border: solid 1px #d9d9d9;
  border-radius: 5px;
  padding: 0 18px;
  color: ${(props: ButtonProps) => (props.active ? '#fff' : '#c2c2c2')};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`
