import RentalList from '../RentalList'
import * as S from './style'
import { AdminRentalList } from 'asset/dummy/AdminRentalList'
import { orderController } from 'utils/libs/requestUrls'
import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { useEffect } from 'react'
export default function RentingList() {
  const url = orderController.getNowRentalList()
  const { data, refetch } = useQuery(['order', url], () => {
    return getData(url)
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <S.rentaingListWrapper>
      {data ? <RentalList data={data.data} /> : null}
    </S.rentaingListWrapper>
  )
}
