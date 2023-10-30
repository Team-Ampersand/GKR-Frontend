import { RentalListDummy } from 'asset/dummy/RentalListdummy'
import RentalItem from 'components/common/atoms/RentalItem'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'
import * as S from './style'
const RentalList = () => {
  const role = useRecoilValue(roleType)
  const [dummy, setDummy] = useState(RentalListDummy.equipmentList)
  return (
    <S.RentalListWrapper>
      {dummy.map((i) => (
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
