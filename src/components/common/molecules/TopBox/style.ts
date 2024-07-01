import styled from '@emotion/styled'
import { Palette } from 'style/global'
import { UserRoleType } from 'types/components/common/UserType'

interface ColorType {
  roleType?: UserRoleType
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  margin-top: 6%;
`

export const TitleWrapper = styled.p<ColorType>`
  color: ${(props: ColorType) =>
    props.roleType !== 'ROLE_STUDENT'
      ? Palette.PRIMARY_P5
      : Palette.PRIMARY_P1};
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`

export const LineWrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Palette.NATURAL_N4};
  margin-bottom: 0.5rem;
`
