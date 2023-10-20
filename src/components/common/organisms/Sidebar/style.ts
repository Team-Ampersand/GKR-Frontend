import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  overflow: hidden;
`

export const LogoBox = styled.div`
  width: 107px;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 40%;
`

export const Top = styled.div`
  margin-top: 30%;
`

export const Bottom = styled.div`
  position: fixed;
  height: 160px;
  top: 80%;
  flex-direction: column;
`
