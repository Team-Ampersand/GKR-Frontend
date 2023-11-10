import styled from '@emotion/styled'
import { MainTemplates } from 'components/common/templates/style'
import { Palette } from 'style/global'

export const NoticeTemplate = styled(MainTemplates)`
  width: calc(100% - 250px);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 24px 80px;
  overflow-y: scroll;
`
