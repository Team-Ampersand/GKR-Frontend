'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import Notice from 'components/Notice/organisms/Notice'
import { NoticeTemplate } from 'components/Notice/templates/style'
import NoticeMangement from 'components/NoticeManagement/organisms/NoticeManagement'
import { NoticeManagementTemplate } from 'components/NoticeManagement/templates/style'
import IsAdmin from 'utils/IsAdmin'
const NoticePage = () => {
  const isAdmin = IsAdmin()
  return (
    <CommonTemplate>
      <Sidebar />
      {isAdmin ? (
        <NoticeManagementTemplate>
          <NoticeMangement />
        </NoticeManagementTemplate>
      ) : (
        <NoticeTemplate>
          <Notice />
        </NoticeTemplate>
      )}
    </CommonTemplate>
  )
}
export default NoticePage
