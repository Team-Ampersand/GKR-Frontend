import { GetServerSidePropsContext } from 'next'
import { setCookie } from 'nookies'

export const setToken = (
  AccessTokenn: string,
  RefreshToken: string,
  ctx: GetServerSidePropsContext | null,
): void => {
  setCookie(ctx, 'AccessToken', `Bearer ${AccessTokenn}`, {
    maxAge: 10800,
    path: '/',
  })
  setCookie(ctx, 'RefreshToken', `Bearer ${RefreshToken}`, {
    maxAge: 15768000,
    path: '/',
  })
}
