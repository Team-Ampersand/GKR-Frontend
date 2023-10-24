import RentalItem from 'components/Home/atoms/Items/RentalItem';
import { RentalListDummy } from "asset/dummy/RentalListdummy"
import { useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { roleType } from "recoilAtoms";
const RentalList = () => {
  const [role, setRole] = useRecoilState(roleType)
  const [dummy, setDummy] = useState(RentalListDummy.equipmentList);
  return (
    <S.RentalListWrapper>
      {
        dummy.map((i) => (
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
        ))
      }
    </S.RentalListWrapper>
  );
};

export default RentalList;
