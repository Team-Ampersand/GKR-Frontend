'use client'
import Request from 'components/Request/organisms/Request'
import { RegistTemplate } from 'components/Product/templates/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const RequestPage = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <RegistTemplate>
          <Request />
        </RegistTemplate>
      </CommonTemplate>
    </>
  )
}

export default RequestPage
