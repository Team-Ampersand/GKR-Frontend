import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { tokenReissue } from 'utils/apis/auth'

export const getToken = async (ctx: GetServerSidePropsContext | null) => {
  if (ctx) {
    let AccessToken = ctx.req.cookies['AcessToken'] || ''
    let RefreshToken = ctx.req.cookies['RefreshToken'] || ''

    if (!RefreshToken) return {}
    else if (!AccessToken) {
      const { newAcessToken }: any = await tokenReissue(RefreshToken, ctx)
      AccessToken = newAcessToken
    }

    return { AccessToken, RefreshToken }
  } else {
    const { AccessToken, RefreshToken } = parseCookies()
    return { AccessToken, RefreshToken }
  }
}
