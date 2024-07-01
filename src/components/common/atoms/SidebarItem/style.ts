import styled from '@emotion/styled'
import { Palette } from 'style/global'
import { UserRoleType } from 'types/components/common/UserType'

interface ColorType {
  checked?: boolean
  active?: boolean
  roleType?: UserRoleType
}

export const Wrapper = styled.div<ColorType>`
  width: 100%;
  height: 48px;

  justify-content: center;
  cursor: pointer;

  > div {
    background: ${(props: ColorType) =>
      props.checked
        ? props.roleType === 'ROLE_STUDENT'
          ? Palette.PRIMARY_P4
          : Palette.PRIMARY_P5
        : ''};
  }
  > div > p {
    color: ${(props: ColorType) =>
      props.checked
        ? props.roleType === 'ROLE_STUDENT'
          ? Palette.PRIMARY_P2
          : Palette.NATURAL_N2
        : ''};
  }
  > div > div > svg {
    path {
      fill: ${(props: ColorType) =>
        props.checked
          ? props.roleType === 'ROLE_STUDENT'
            ? Palette.PRIMARY_P2
            : Palette.NATURAL_N2
          : ''};
      stroke: ${(props: ColorType) =>
        props.checked
          ? props.roleType === 'ROLE_STUDENT'
            ? Palette.PRIMARY_P2
            : Palette.NATURAL_N2
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
  color: ${Palette.NATURAL_N5};
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
