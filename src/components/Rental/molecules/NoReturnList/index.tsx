import { useQuery } from 'react-query'
import RentalList from '../RentalList'
import * as S from './style'
import { orderController } from 'utils/libs/requestUrls'
import { useEffect } from 'react'
import { getData } from 'utils/apis/data'

export default function NoRetureList() {
  const url = orderController.getNoReturnRentalList()
  const { data, refetch } = useQuery(['order', url], () => {
    return getData(url)
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <S.NoReturnListWrapper>
      {data ? <RentalList data={data.data} periodColor="#FF6464" /> : null}
    </S.NoReturnListWrapper>
  )
}
