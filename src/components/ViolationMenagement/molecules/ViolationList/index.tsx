import ViolationItem from 'components/ViolationMenagement/atoms/ViolationItem'
import * as S from './style'
import { ViolationDataDummy } from 'asset/dummy/ViolationDataDummy'

export default function ViolationList() {
  return (
    <S.ViolationListWrapper>
      {ViolationDataDummy.violationList.map((i, idx) => (
        <ViolationItem
          key={idx}
          userName={i.userName}
          violationReason={i.violationReason}
          violationEndDate={i.violationEndDate}
          violationStartDate={i.violationStartDate}
        />
      ))}
    </S.ViolationListWrapper>
  )
}
