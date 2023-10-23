import MenuButton from 'components/Home/atoms/Button/MenuButton';
import { FilterListData } from "asset/data/FilterListData"
import { useState } from 'react';
import * as S from "./style";
import FilterModal from 'components/Home/atoms/Modal/FilterModal';
import FilterButton from 'components/Home/atoms/Button/FilterButton';
function MenuList() {
  const [type, setType] = useState(FilterListData.equipmentType[0].name)
  const [state, setState] = useState(FilterListData.equipmentStatusList[0].name)
  const [modal, setModal] = useState(false)
  return (
    <S.FilterListWrapper>
      <FilterButton modal={modal} setModal={setModal} />
      <S.FilterModalWrapper>
        {modal ? <FilterModal /> : null}
      </S.FilterModalWrapper>
    </S.FilterListWrapper>
  );
};

export default MenuList;
