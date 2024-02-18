import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface ChoiceProps {
  active: boolean | undefined
}

export const Wrapper = styled.div`
  display: flex;
  height: fit-content auto;
`

export const Item = styled.button`
  color: ${(props: ChoiceProps) =>
    props.active ? Palette.PRIMARY_P5 : Palette.NATURAL_N4};
  border: none;
  border-bottom: ${(props: ChoiceProps) =>
    props.active ? `2px solid ${Palette.PRIMARY_P5}` : 'none'};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  background: none;
`
