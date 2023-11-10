import { destroyCookie } from 'nookies'

export const removeToken = (): void => {
  destroyCookie(null, 'AccessToken')
  destroyCookie(null, 'RefreshToken')
}
