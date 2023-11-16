import RentalItem from 'components/common/atoms/RentalItem'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'
import { getData } from 'utils/apis/data'
import { OrderController } from 'utils/libs/requestUrls'
import * as S from './style'
const state = {
  WAITING: 'WAITING',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
}

const RequestList = () => {
  const role = useRecoilValue(roleType)
  const url = OrderController.stateOrder()
  const { data, refetch } = useQuery(
    ['order', url],
    () => {
      const queryParams = { orderStatus: state.WAITING }
      return getData(url, queryParams)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  useEffect(() => {
    if (url) refetch()
  }, [url, refetch])
  const orderEquipmentList = data?.data?.orderEquipmentList
  return (
    <S.RentalListWrapper>
      {orderEquipmentList &&
        [...orderEquipmentList].map((equipment) => (
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

export default RequestList
