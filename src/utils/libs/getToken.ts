import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { tokenReissue } from 'utils/apis/auth'
export const getToken = async (ctx: GetServerSidePropsContext | null) => {
  if (ctx) {
    let AccessToken = ctx.req.cookies['AccessToken'] || ''
    let RefreshToken = ctx.req.cookies['RefreshToken'] || ''
    if (!RefreshToken) return {}
    else if (!AccessToken) {
      const { newAccessToken }: any = await tokenReissue(RefreshToken, ctx)
      AccessToken = newAccessToken
    }
    return { AccessToken, RefreshToken }
  } else {
    const { AccessToken, RefreshToken } = parseCookies()
    return { AccessToken, RefreshToken }
  }
}
