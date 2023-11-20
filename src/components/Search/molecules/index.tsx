import RentalItem from 'components/common/atoms/RentalItem'
import { useRecoilValue } from 'recoil'
import { searchState } from 'recoilAtoms'
import * as S from './style'

export default function SearchList() {
  const searchList = useRecoilValue(searchState)
  return (
    <S.SearchListWrapper>
      {searchList.map((i: any) => (
        <RentalItem
          key={i.id}
          id={i.equipmentId}
          imageUrl={i.imageUrl}
          title={i.name}
          equipmentStatus={i.equipmentStatus}
          equipmentType={i.equipmentType}
          description={i.description}
        />
      ))}
    </S.SearchListWrapper>
  )
}
