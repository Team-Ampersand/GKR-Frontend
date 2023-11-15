import MGMTListItem from 'components/Request/atoms/RequestItem'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { OrderController } from 'utils/libs/requestUrls'
import * as S from './style'
function formatDate(date: any) {
  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  return `${year}.${month}.${day}`
}
export default function RequestList() {
  const url = OrderController.waitOrder()
  const { data, refetch } = useQuery(['order', url], () => getData(url), {
    enabled: !!url,
    refetchOnWindowFocus: false,
  })
  useEffect(() => {
    if (url) refetch()
  }, [url, refetch])
  const applicationList = data?.data?.applicationList
  return (
    <S.RequestListWrapper>
      {applicationList &&
        [...applicationList].map((application) => {
          const startDate = application.rentalStartDate
            ? new Date(application.rentalStartDate)
            : null
          const endDate = application.rentalEndDate
            ? new Date(application.rentalEndDate)
            : null

          const formattedStartDate = startDate
            ? formatDate(startDate)
            : '대기중'
          const formattedEndDate = endDate ? formatDate(endDate) : '대기중'
          return (
            <MGMTListItem
              key={application.applicantId}
              thumbnail={application.imageUrl}
              title={application.name}
              tag={application.orderType}
              tagVisible={true}
              student={application.userName}
              period={`${formattedStartDate} ~ ${formattedEndDate}`}
              id={application.applicationId}
            />
          )
        })}
    </S.RequestListWrapper>
  )
}
