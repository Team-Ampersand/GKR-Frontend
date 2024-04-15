import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface UserListItemWrapperPropsType {
  isFocus: boolean
}

export const Wrapper = styled.div<UserListItemWrapperPropsType>`
  display: grid;
  grid-template-columns: minmax(39%, auto) repeat(3, minmax(21%, auto));
  min-height: 4rem;
  cursor: pointer;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background-color: ${(props) => (props.isFocus ? Palette.NATURAL_N3 : null)};

  p {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  :hover {
    background-color: #f4f4f4;
  }
`
