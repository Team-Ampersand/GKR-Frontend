import { GetServerSidePropsContext } from 'next'
import { setCookie } from 'nookies'
export const setToken = (
  AccessToken: string,
  AccessTokenExp: number,
  RefreshToken: string,
  RefreshTokenExp: number,
  ctx: GetServerSidePropsContext | null,
): void => {
  setCookie(ctx, 'AccessToken', `Bearer ${AccessToken}`, {
    maxAge: AccessTokenExp,
    path: '/',
  }) // 3시간
  setCookie(ctx, 'RefreshToken', `Bearer ${RefreshToken}`, {
    maxAge: RefreshTokenExp,
    path: '/',
  }) // 1주일
}
