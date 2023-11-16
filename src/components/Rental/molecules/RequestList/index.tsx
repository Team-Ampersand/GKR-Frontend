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
        [...orderEquipmentList].map((orderEquipment) => (
          <RentalItem
            key={orderEquipment.id}
            id={orderEquipment.id}
            title={orderEquipment.name}
            imageUrl={orderEquipment.imageUrl}
            description={orderEquipment.description}
            equipmentStatus={orderEquipment.equipmentStatus}
            equipmentType={orderEquipment.equipmentType}
            role={role}
          />
        ))}
    </S.RentalListWrapper>
  )
}

export default RequestList
