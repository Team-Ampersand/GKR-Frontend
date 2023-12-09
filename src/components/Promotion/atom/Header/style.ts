import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${Palette.PRIMARY_P1};

  p {
    font-size: 50px;
    font-weight: 900;
  }
`

export const Description = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  text-align: center;
  color: ${Palette.NATURAL_N3};
  padding: 48px 0 150px 0;
`
