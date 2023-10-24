import { FilterButtonPropsType } from 'types/components/Home/FilterTypes'
import FilterItem from '../../../../common/atoms/FIlterItem'
import * as S from './style'
import { FilterListData } from 'asset/data/FilterListData'

export default function FilterModal({ setModal }: FilterButtonPropsType) {
  function closeModal() {
    setModal((prev) => !prev)
  }
  return (
    <>
      <S.Wrapper onClick={closeModal}></S.Wrapper>
      <S.FilterModalWrapper >
        <S.Title>필터</S.Title>
        <S.subTitle>기자재 종류</S.subTitle>
        <S.filterListWrapper onClick={(e) => e.stopPropagation()}>
          {FilterListData.equipmentType.map((i) => (
            <FilterItem
              name={i.name}
              value={i.value}
              type={true}
              key={i.value}
            />
          ))}
        </S.filterListWrapper>
        <S.subTitle>상태</S.subTitle>
        <S.filterListWrapper onClick={(e) => e.stopPropagation()}>
          {FilterListData.equipmentStatusList.map((i) => (
            <FilterItem
              name={i.name}
              value={i.value}
              type={false}
              key={i.value}
            />
          ))}
        </S.filterListWrapper>
      </S.FilterModalWrapper>
    </>
  )
}
