import styled from '@emotion/styled'
import { MainTemplates } from 'components/common/templates/style'
import { Palette } from 'style/global'

export const ViolationTemplate = styled(MainTemplates)`
  background-color: ${Palette.BACKGROUND_BG};
  padding: 24px 80px;
  overflow: scroll;
`
