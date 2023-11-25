'use client'
import { DetailTemplate } from 'components/Detail/template/style'
import RequestDetail from 'components/Request/organisms/RequestDetail'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const RequestPage = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <DetailTemplate>
          <RequestDetail />
        </DetailTemplate>
      </CommonTemplate>
    </>
  )
}

export default RequestPage
