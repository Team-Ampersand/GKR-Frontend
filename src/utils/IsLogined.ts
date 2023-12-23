import { parseCookies } from 'nookies'

export default function IsLogined() {
  const { RefreshToken } = parseCookies()
  return RefreshToken ? true : false
}
