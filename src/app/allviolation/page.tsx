'use client'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import { AllViolationTemplate } from 'components/ViolationMenagement/templates/style'
import ViolationManagement from 'components/ViolationMenagement/organisms/ViolationManagement'
const Allviolation = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <AllViolationTemplate>
          <ViolationManagement />
        </AllViolationTemplate>
      </CommonTemplate>
    </>
  )
}

export default Allviolation
