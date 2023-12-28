import { UserController } from 'utils/libs/requestUrls'
import { getData } from './data'
import { useQuery } from 'react-query'

export const GetUser = () => {
  const url = UserController.user()
  const { data: user, refetch } = useQuery(['user', url], () => {
    return getData(url)
  })
  return { user,refetch }
}
