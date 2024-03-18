import { useState } from 'react'
import * as S from './style'
import ChoiceBox from 'components/common/molecules/ChoiceBox'
import AddViolation from 'components/ViolationMenagement/organisms/AddViolation'
import ViolationList from 'components/ViolationMenagement/molecules/ViolationList'
export default function ViolationManagement() {
  const [pageState, setPageState] = useState('제재 목록')
  return (
    <S.AllViolationWrapper>
      <ChoiceBox
        data={['제재 목록', '사용자 제재']}
        value={pageState}
        setValue={setPageState}
      />
      {pageState === '제재 목록' ? (
        <ViolationList />
      ) : (
        <AddViolation setPage={setPageState} />
      )}
    </S.AllViolationWrapper>
  )
}
