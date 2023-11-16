import styled from '@emotion/styled'

interface ChoiceProps {
  active: boolean
  admin: boolean
}

export const Wrapper = styled.div`
  display: flex;
  height: fit-content auto;
`

export const Item = styled.button<ChoiceProps>`
  color: ${(props: ChoiceProps) =>
    props.active ? (props.admin ? '#865dff' : '#FF6000') : '#c2c2c2'};
  border: none;
  border-bottom: ${(props: ChoiceProps) =>
    props.active ? `2px solid ${props.admin ? '#865dff' : '#FF6000'}` : 'none'};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  background: none;
`
