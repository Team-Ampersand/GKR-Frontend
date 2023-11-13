import ChoiceBox from 'components/common/molecules/ChoiceBox'
import * as S from './style'
import { useState } from 'react'
import RentalList from 'components/Rental/molecules/RentalList'
import NoRetureList from 'components/Rental/molecules/NoReturnList'
import RentingList from 'components/Rental/molecules/RentingList'

export default function Rental() {
  const [pageState, setPageState] = useState('대여중인 자재')
  return (
    <S.RentalWrapper>
      <ChoiceBox
        data={['대여중인 자재', '연체된 자재']}
        setValue={setPageState}
        value={pageState}
      />
      {pageState === '대여중인 자재' ? <RentingList /> : <NoRetureList />}
    </S.RentalWrapper>
  )
}
