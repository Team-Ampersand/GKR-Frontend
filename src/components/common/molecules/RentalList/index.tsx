import RentalItem from 'components/common/atoms/RentalItem'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { filterState, roleType } from 'recoilAtoms'
import { getEquipment } from 'utils/apis/equipment'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
const handleInvalidCondition = () => {
  toast.error('잘못된 필터 조건입니다. 동시에 선택 불가능 합니다.')
}

const RentalList = () => {
  const role = useRecoilValue(roleType)
  const params = useRecoilValue(filterState)
  const generateUrl = () => {
    if (!params.equipmentType && params.equipmentStatus) {
      return EquipmentController.getState('state')
    } else if (params.equipmentType && !params.equipmentStatus) {
      return EquipmentController.getState('type')
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
      let queryParams = {}
      if (!params.equipmentType && params.equipmentStatus) {
        queryParams = { equipmentStatus: params.equipmentStatus }
      } else if (params.equipmentType && !params.equipmentStatus) {
        queryParams = { equipmentType: params.equipmentType }
      }
      return getEquipment(url, queryParams)
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
        [...equipmentList].map((i) => (
          <RentalItem
            id={i.id}
            title={i.name}
            imageUrl={i.imageUrl}
            description={i.description}
            equipmentStatus={i.equipmentStatus}
            equipmentType={i.equipmentType}
            role={role}
            key={i.id}
          />
        ))}
    </S.RentalListWrapper>
  )
}

export default RentalList
