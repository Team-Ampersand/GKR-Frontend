'use client'
import Rental from 'components/Home/organisms/Rental'
import { HomeTemplate } from 'components/Home/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const RentalList = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <HomeTemplate>
        <Rental />
      </HomeTemplate>
    </CommonTemplate>
  )
}
export default RentalList
