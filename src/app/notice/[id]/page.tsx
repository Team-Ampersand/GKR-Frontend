'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import NoticeDetail from 'components/Notice/organisms/NoticeDetail'
import { NoticeDetailTemplate } from 'components/Notice/templates/style'

const NoticeDetailPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeDetailTemplate>
        <NoticeDetail />
      </NoticeDetailTemplate>
    </CommonTemplate>
  )
}
export default NoticeDetailPage
