import RentalItem from 'components/common/atoms/RentalItem'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { UserController } from 'utils/libs/requestUrls'
import * as S from './style'
import getRole from 'utils/getRole'

const UserRentalList = () => {
  const role = getRole()
  const url = UserController.rentalUser()
  const { data, refetch } = useQuery(
    [url],
    () => {
      return getData(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  useEffect(() => {
    if (url) refetch()
  }, [url, refetch])
  const equipmentList = data?.data?.equipmentList
  return (
    <S.RentalListWrapper>
      {equipmentList &&
        [...equipmentList].map((equipment) => (
          <RentalItem
            key={equipment.equipmentId}
            id={equipment.equipmentId}
            title={equipment.name}
            imageUrl={equipment.imageUrl}
            description={equipment.description}
            equipmentStatus={equipment.equipmentStatus}
            equipmentType={equipment.equipmentType}
            role={role}
          />
        ))}
    </S.RentalListWrapper>
  )
}

export default UserRentalList
