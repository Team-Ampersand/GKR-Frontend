import { useQuery } from 'react-query'
import { getData } from 'utils/apis/data'
import { ViolationController } from 'utils/libs/requestUrls'

const ViolationList = () => {
  const url = ViolationController.getViolation()
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
  console.log(data)

  return <></>
}

export default ViolationList
