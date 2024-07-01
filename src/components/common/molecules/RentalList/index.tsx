import RentalItem from 'components/common/atoms/RentalItem'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { filterState } from 'recoilAtoms'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'
import { useEffect } from 'react'
import { getData } from 'utils/apis/data'
import getRole from 'utils/getRole'

const RentalList = () => {
  const role = getRole()
  const params = useRecoilValue(filterState)
  const url = EquipmentController.filterEquipment()
  const { data, refetch } = useQuery(
    ['equipment', url],
    () => {
      const queryParams = {
        state: params.equipmentStatus,
        type: params.equipmentType,
      }

      return getData(url, queryParams)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  useEffect(() => {
    if (url) refetch()
  }, [url, refetch, params])
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

export default RentalList
