'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import Notice from 'components/notice/organisms'
import { NoticeTemplate } from 'components/notice/templates/style'

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
