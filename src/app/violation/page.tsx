'use client'
import Violation from 'components/Violation/organisms'
import { ViolationTemplate } from 'components/Violation/templates/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const ViolationPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <ViolationTemplate>
        <Violation />
      </ViolationTemplate>
    </CommonTemplate>
  )
}
export default ViolationPage
