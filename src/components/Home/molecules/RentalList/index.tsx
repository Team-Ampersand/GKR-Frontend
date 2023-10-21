import RentalItem from 'components/Home/atoms/Items/RentalItem';
import { RentalListDummy } from "asset/dummy/RentalListdummy"
import { useState } from 'react';
import * as S from './style';

const RentalList = () => {
  const [dummy, setDummy] = useState(RentalListDummy.equipmentList);
  return (
    <S.Layer>
      {
        dummy.map((i) => (
          <RentalItem
            id={i.id}
            title={i.name}
            imageUrl={i.imageUrl}
            description={i.description}
            equipmentStatus={i.equipmentStatus}
            equipmentType={i.equipmentType}

            key={i.id}
          />
        ))
      }
    </S.Layer>
  );
};

export default RentalList;
