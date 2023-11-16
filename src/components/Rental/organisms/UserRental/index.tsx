import UserRentalList from 'components/Rental/molecules/UserRentalList'
import ChoiceBox from 'components/common/molecules/ChoiceBox'
import { useState } from 'react'
import * as S from './style'
import RequestList from 'components/Rental/molecules/RequestList'

const UserRental = () => {
  const [page, setPage] = useState<string>('대여 목록')
  return (
    <S.Wrapper>
      <ChoiceBox
        data={['대여 목록', '요청 목록']}
        value={page}
        setValue={setPage}
      />
      {page === '대여 목록' ? <UserRentalList /> : <RequestList />}
    </S.Wrapper>
  )
}

export default UserRental
