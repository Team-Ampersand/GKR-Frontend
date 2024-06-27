import { parseCookies, setCookie, destroyCookie } from 'nookies'

const cookieManager = (ctx = undefined) => {
  const getCookie = (key: string) => {
    const cookies = parseCookies(ctx)
    return cookies[key] ? JSON.parse(cookies[key]) : null
  }

  const setCookies = (key: string, value: any, options = {}) => {
    setCookie(ctx, key, JSON.stringify(value), {
      path: '/',
      ...options,
    })
  }

  const removeCookies = (key: string, options = {}) => {
    destroyCookie(ctx, key, {
      path: '/',
      ...options,
    })
  }

  return { getCookie, setCookies, removeCookies }
}

export default cookieManager
