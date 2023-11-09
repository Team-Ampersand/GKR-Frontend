'use client'
import { CommonTemplate } from 'components/common/templates/style'
import { RentalTemplate } from 'components/Rental/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import Rental from 'components/Rental/organisms/Rental'

const rentalistAdmin = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <RentalTemplate>
        <Rental />
      </RentalTemplate>
    </CommonTemplate>
  )
}

export default rentalistAdmin
