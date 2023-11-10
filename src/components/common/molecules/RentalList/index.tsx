import RentalItem from 'components/common/atoms/RentalItem'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'
import { getEquipment } from 'utils/apis/equipment'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'
const RentalList = () => {
  const role = useRecoilValue(roleType)
  const { data } = useQuery(EquipmentController.getEquipment(), getEquipment)
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
