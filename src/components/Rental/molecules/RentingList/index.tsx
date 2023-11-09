import RentalList from '../RentalList'
import * as S from './style'
import { AdminRentalList } from 'asset/dummy/AdminRentalList'

export default function RentingList() {
  return (
    <S.rentaingListWrapper>
      <RentalList data={AdminRentalList} />
    </S.rentaingListWrapper>
  )
}
