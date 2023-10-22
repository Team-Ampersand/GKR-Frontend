import styled from '@emotion/styled'

interface ButtonProps {
  width: string | undefined
  active: boolean
  color: string | undefined
}

export const Wrapper = styled.div`
  width: 100%;
  height: 192px;
`

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width + 'px' : '85px')};
  height: 36px;
  background: ${(props: ButtonProps) => (props.active ? '#865DFF' : '#fff')};
  border: solid 1px #d9d9d9;
  border-radius: 5px;

  color: ${(props: ButtonProps) => (props.active ? '#fff' : '#c2c2c2')};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`
