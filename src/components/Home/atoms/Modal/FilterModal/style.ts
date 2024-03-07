import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

export const FilterModalWrapper = styled.div`
  position: fixed;
  width: 30rem;
  height: 18rem;
  background-color: ${Palette.NATURAL_N2};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
  margin: 0 0.8rem;
  border-radius: 5px;
  padding: 1rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 900;
  color: ${Palette.NATURAL_N1};
  padding-bottom: 1rem;
`

export const subTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${Palette.NATURAL_N6};
`
export const filterListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem 0.6rem;
  margin: 1rem 0;
`
