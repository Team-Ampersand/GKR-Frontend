'use client'
import AdminRental from 'components/Rental/organisms/AdminRental'
import UserRental from 'components/Rental/organisms/UserRental'
import { RentalTemplate } from 'components/Rental/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import IsAdmin from 'utils/IsAdmin'
const RentalList = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      {IsAdmin() ? (
        <RentalTemplate>
          <AdminRental />
        </RentalTemplate>
      ) : (
        <RentalTemplate>
          <UserRental />
        </RentalTemplate>
      )}
    </CommonTemplate>
  )
}
export default RentalList
