'use client'
import Request from 'components/Request/organisms/Request'
import { RequestTemplate } from 'components/Request/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const RequestPage = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <RequestTemplate>
          <Request />
        </RequestTemplate>
      </CommonTemplate>
    </>
  )
}

export default RequestPage
