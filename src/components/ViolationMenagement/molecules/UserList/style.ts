import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.8rem;
  gap: 0.5rem;
  background-color: ${Palette.NATURAL_N2};
  height: 70vh;
  overflow-y: scroll;
  flex: 1;
  border-radius: 7px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Palette.NATURAL_N5};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${Palette.NATURAL_N3};
  }
`
