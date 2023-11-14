import TopBox from 'components/common/molecules/TopBox'
import * as S from './style'
import UserRentalList from 'components/Rental/molecules/UserRentalList'

const UserRental = () => {
  return (
    <S.Wrapper>
      <TopBox text="대여 물품" />
      <UserRentalList />
    </S.Wrapper>
  )
}

export default UserRental
