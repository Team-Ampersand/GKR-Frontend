'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import NoticeDetail from 'components/Notice/organisms/NoticeDetail'
import { NoticeTemplate } from 'components/Notice/templates/style'
import { usePathname } from 'next/navigation'

const NoticeDetailPage = () => {
  const pathname = usePathname()

  const id = pathname.split('/').pop()

  console.log(id)
  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeTemplate>
        <NoticeDetail id={id} />
      </NoticeTemplate>
    </CommonTemplate>
  )
}
export default NoticeDetailPage