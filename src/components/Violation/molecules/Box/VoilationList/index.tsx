import ViolationItem from 'components/Violation/atom/Item/ViolationItem'
import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { ViolationController } from 'utils/libs/requestUrls'

const ViolationList = () => {
  const url = ViolationController.violation()
  const { data } = useQuery(
    ['violation', url],
    () => {
      return getData(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )

  const violationList = data?.data?.violationList

  return (
    <>
      {violationList &&
        [...violationList].map((violation) => (
          <ViolationItem
            key={violation.id}
            violationReason={violation.violationReason}
            violationStartDate={violation.violationStartDate}
            violationEndDate={violation.violationEndDate}
          />
        ))}
    </>
  )
}

export default ViolationList
