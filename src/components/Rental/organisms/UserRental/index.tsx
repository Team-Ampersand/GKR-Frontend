import UserRentalList from 'components/Rental/molecules/UserRentalList'
import ChoiceBox from 'components/common/molecules/ChoiceBox'
import TopBox from 'components/common/molecules/TopBox'
import { useState } from 'react'
import * as S from './style'

const UserRental = () => {
  const [page, setPage] = useState<string>('대여 목록')
  return (
    <S.Wrapper>
      <ChoiceBox
        data={['대여 목록', '요청 목록']}
        value={page}
        setValue={setPage}
      />
      <UserRentalList />
    </S.Wrapper>
  )
}

export default UserRental
