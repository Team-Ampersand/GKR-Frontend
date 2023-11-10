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
  }) // 3시간
  setCookie(ctx, 'RefreshToken', `Bearer ${RefreshToken}`, {
    maxAge: 604800,
    path: '/',
  }) // 1주일
}
