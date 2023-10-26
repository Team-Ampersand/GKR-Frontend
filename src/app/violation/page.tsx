'use client'
import { HomeTemplate } from 'components/Home/template/style'
import { ViolationTemplate } from 'components/Violation/templates/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const Violation = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <ViolationTemplate></ViolationTemplate>
    </CommonTemplate>
  )
}
export default Violation
