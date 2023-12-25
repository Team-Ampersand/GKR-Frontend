import styled from '@emotion/styled'
import { Palette } from 'style/global'

interface ColorType {
  checked?: boolean
  active?: boolean
  roleType?: 'member' | 'admin'
}

export const Wrapper = styled.div<ColorType>`
  width: 100%;
  height: 48px;

  justify-content: center;
  cursor: pointer;

  > div {
    background: ${(props: ColorType) =>
      props.checked
        ? props.roleType === 'member'
          ? Palette.PRIMARY_P4
          : Palette.PRIMARY_P5
        : ''};
  }
  > div > p {
    color: ${(props: ColorType) =>
      props.checked
        ? props.roleType === 'member'
          ? Palette.PRIMARY_P2
          : '#fff'
        : ''};
  }
  > div > div > svg {
    path {
      fill: ${(props: ColorType) =>
        props.checked
          ? props.roleType === 'member'
            ? Palette.PRIMARY_P2
            : '#fff'
          : ''};
      stroke: ${(props: ColorType) =>
        props.checked
          ? props.roleType === 'member'
            ? Palette.PRIMARY_P2
            : '#fff'
          : ''};
    }
  }
`

export const IconBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`

export const NameBox = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #999;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8%;
  gap: 16px;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;

  ${(props: ColorType) =>
    !props.active &&
    `
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
`
