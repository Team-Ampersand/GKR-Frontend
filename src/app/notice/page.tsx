'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import Notice from 'components/Notice/organisms/Notice'
import { NoticeTemplate } from 'components/Notice/templates/style'

const NoticePage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeTemplate>
        <Notice />
      </NoticeTemplate>
    </CommonTemplate>
  )
}
export default NoticePage
