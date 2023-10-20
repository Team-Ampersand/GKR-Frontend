'use client'

import { RegistTemplate } from 'components/Product/templates/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import RequestDetail from 'components/Request/organisms/RequestDetail'

const RequestPage = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <RegistTemplate>
          <RequestDetail />
        </RegistTemplate>
      </CommonTemplate>
    </>
  )
}

export default RequestPage
