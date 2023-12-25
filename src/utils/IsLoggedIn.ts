import { parseCookies } from 'nookies'

export default function IsLoggedIn() {
  const { RefreshToken } = parseCookies()
  return RefreshToken ? true : false
}
