import FilterItem from "../../Items/FIlterItem";
import * as S from "./style"
import { FilterListData } from "asset/data/FilterListData";


export default function FilterModal({ }) {

    return (
        <S.FilterModalWrapper>
            <S.Title>필터</S.Title>
            <S.subTitle>기자재 종류</S.subTitle>
            <S.filterListWrapper>
                {
                    FilterListData.equipmentType.map((i) => (
                        <FilterItem
                            name={i.name}
                            value={i.value}
                            type={true}
                            key={i.value}
                        />
                    ))
                }
            </S.filterListWrapper>
            <S.subTitle>상태</S.subTitle>
            <S.filterListWrapper>
                {
                    FilterListData.equipmentStatusList.map((i) => (
                        <FilterItem
                            name={i.name}
                            value={i.value}
                            type={false}
                            key={i.value}
                        />
                    ))
                }
            </S.filterListWrapper>
        </S.FilterModalWrapper>
    )
}