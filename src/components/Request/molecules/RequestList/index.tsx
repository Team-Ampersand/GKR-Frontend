import { OrderController } from 'utils/libs/requestUrls'
import * as S from './style'
import MGMTListItem from 'components/Request/atoms/RequestItem'
import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { useEffect } from 'react'
export default function RequestList() {
  const url = OrderController.waitOrder()
  const { data, refetch } = useQuery(
    ['order', url],
    () => {
      return getData(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  useEffect(() => {
    if (url) refetch()
  }, [url, refetch])
  const applicationList = data?.data?.applicationList
  return (
    <S.RequestListWrapper>
      <MGMTListItem
        thumbnail="s"
        title="Raspberry pie"
        tag="RENTAL"
        tagVisible={true}
        student="손정민"
        period="2023.05.26 ~ 2023.06.26"
        id={1}
      />
      <MGMTListItem
        thumbnail="s"
        title="Raspberry pie"
        tag="RETURN"
        tagVisible={true}
        student="손정민"
        period="2023.05.26 ~ 2023.06.26"
        id={2}
      />
      <MGMTListItem
        thumbnail="s"
        title="Raspberry pie"
        tag="EXTENSION"
        tagVisible={true}
        student="손정민"
        period="2023.05.26 ~ 2023.06.26"
        id={2}
      />
    </S.RequestListWrapper>
  )
}
