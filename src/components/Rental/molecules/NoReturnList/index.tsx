import RentalList from '../RentalList'
import * as S from './style'
import { AdminRentalList } from 'asset/dummy/AdminRentalList'

export default function NoRetureList() {
  return (
    <S.NoReturnListWrapper>
      <RentalList data={AdminRentalList} periodColor="#FF6464" />
    </S.NoReturnListWrapper>
  )
}
