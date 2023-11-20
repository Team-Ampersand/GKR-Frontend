'use client'
import DetailEdit from 'components/Detail/organisms/DetailEdit/inex'
import { DetailTemplate } from 'components/Detail/template/style'
import SearchField from 'components/common/molecules/SearchField'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const DetailEditPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <DetailTemplate>
        <SearchField />
        <DetailEdit />
      </DetailTemplate>
    </CommonTemplate>
  )
}
export default DetailEditPage
