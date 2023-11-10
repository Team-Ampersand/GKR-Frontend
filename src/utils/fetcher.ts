import { apiClient } from './libs/apiClient'
const fetcher = (url: string) => apiClient.get(url).then((res) => res.data)
export default fetcher
