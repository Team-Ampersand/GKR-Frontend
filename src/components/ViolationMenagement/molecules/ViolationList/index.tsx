import { useQuery } from 'react-query'
import ViolationItem from 'components/ViolationMenagement/atoms/ViolationItem'
import { getData } from 'utils/apis/data'
import { ViolationController } from 'utils/libs/requestUrls'
import * as S from './style'
import { useEffect } from 'react'

export default function ViolationList() {
  const url = ViolationController.getViolationAll()
  const { data, refetch } = useQuery(
    ['violation', url],
    () => {
      return getData(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  refetch()
  const violationList = data?.data?.violationList
  return (
    <S.ViolationListWrapper>
      {violationList &&
        [...violationList].map((equipment) => (
          <ViolationItem
            key={equipment.id}
            id={equipment.id}
            userName={equipment.userName}
            violationReason={equipment.violationReason}
            violationEndDate={equipment.violationEndDate}
            violationStartDate={equipment.violationStartDate}
            canceled={equipment.canceled}
          />
        ))}
    </S.ViolationListWrapper>
  )
}
