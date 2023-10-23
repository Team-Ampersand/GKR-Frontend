import * as S from './style';
import img from 'asset/png/raspberry pie.png';
import Tag from 'components/common/atoms/Tag';
import { RentalItemPropsType } from 'types/components/Home/RentalTypes';
import { FilterListData } from 'asset/data/FilterListData';

interface getNameFromValuePropstype {
  list: {
    name: string;
    value: string;
    color?: string
  }[]

  valueToFind: string
}

const RentalItem = ({ id, title, imageUrl, description, equipmentType, equipmentStatus, role }: RentalItemPropsType) => {
  const Loading = {
    name: "로딩중",
    value: "Loading",
  }

  const getNameFromValue = ({ list, valueToFind }: getNameFromValuePropstype) => {
    const item = list.find(item => item.value === valueToFind);
    return item ? item : Loading;
  }

  const equipmentTypeName = getNameFromValue({
    list: FilterListData.equipmentType,
    valueToFind: equipmentType
  });

  const equipmentStatusName = getNameFromValue({
    list: FilterListData.equipmentStatusList,
    valueToFind: equipmentStatus
  });

  return (
    <S.Layer onClick={() => { }} >
      <S.imageFrameWrapper>
        <img src={imageUrl} alt='' />
      </S.imageFrameWrapper>
      <S.ContentBox>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.descriptionWrapper>{description}</S.descriptionWrapper>
        </S.TitleWrapper>
        <S.TagListWrapper>
          <Tag data={equipmentStatusName} role={role} />
          <Tag data={equipmentTypeName} role={role} />
        </S.TagListWrapper>
      </S.ContentBox>
    </S.Layer>
  );
};

export default RentalItem;
