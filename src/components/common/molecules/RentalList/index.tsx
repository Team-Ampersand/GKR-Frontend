import RentalItem from 'components/common/atoms/RentalItem'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { filterState, roleType } from 'recoilAtoms'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getData } from 'utils/apis/data'

const handleInvalidCondition = () => {
  toast.error('잘못된 필터 조건입니다. 동시에 선택 불가능 합니다.')
}

const RentalList = () => {
  const role = useRecoilValue(roleType)
  const params = useRecoilValue(filterState)
  const generateUrl = () => {
    if (!params.equipmentType && params.equipmentStatus) {
      return EquipmentController.getEquipment('state')
    } else if (params.equipmentType && !params.equipmentStatus) {
      return EquipmentController.getEquipment('type')
    } else if (params.equipmentType && params.equipmentStatus) {
      handleInvalidCondition()
    } else {
      return EquipmentController.getEquipment()
    }
  }
  const url = generateUrl()
  const { data, refetch } = useQuery(
    ['equipment', url],
    () => {
      const queryParams =
        !params.equipmentType && params.equipmentStatus
          ? { equipmentStatus: params.equipmentStatus }
          : params.equipmentType && !params.equipmentStatus
          ? { equipmentType: params.equipmentType }
          : {}
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
            key={equipment.id}
            id={equipment.id}
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
