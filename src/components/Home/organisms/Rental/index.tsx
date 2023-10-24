import RentalList from 'components/common/molecules/RentalList'
import * as S from './style'
import Filter from 'components/Home/molecules/Filter'
export default function Rental() {
  return (
    <S.RentalWrapper>
      <Filter />
      <S.LineWrapper />
      <RentalList />
    </S.RentalWrapper>
  )
}
