import useSWR from 'swr'
import fetcher from 'utils/fetcher'

const useNotice = (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_GKR_SERVER_URL}/notice/${id}`
  const { data, error } = useSWR(url, fetcher)

  return {
    data: data,
    error: error,
  }
}
export default useNotice
