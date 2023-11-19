'use client'
import { HomeTemplate } from 'components/Home/template/style'
import AdminRental from 'components/Rental/organisms/AdminRental'
import UserRental from 'components/Rental/organisms/UserRental'
import { RentalTemplate } from 'components/Rental/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'
import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'

const RentalList = () => {
  const Role = useRecoilValue(roleType)
  return (
    <CommonTemplate>
      <Sidebar />
      {Role === 'admin' ? (
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
