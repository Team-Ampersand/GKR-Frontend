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
  justify-content: space-between;
`

export const LogoBox = styled.div`
  width: fit-content;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Top = styled.div`
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
`

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px 0;
  gap: 20px;
`
