'use client'
import SearchField from 'components/common/molecules/SearchField'
import { DetailTemplate } from 'components/Detail/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import RequestDetail from 'components/Request/organisms/RequestDetail'

const RequestPage = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <DetailTemplate>
          <SearchField />
          <RequestDetail />
        </DetailTemplate>
      </CommonTemplate>
    </>
  )
}

export default RequestPage
