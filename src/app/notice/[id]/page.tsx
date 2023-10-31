'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import NoticeDetail from 'components/notice/organisms/NoticeDetail'
import { NoticeTemplate } from 'components/notice/templates/style'

const NoticeDetailPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeTemplate>
        <NoticeDetail />
      </NoticeTemplate>
    </CommonTemplate>
  )
}
export default NoticeDetailPage
