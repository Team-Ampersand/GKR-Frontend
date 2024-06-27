import { cookies } from 'next/headers'

const cookieManager = () => {
  const cookieStore = cookies()

  const getCookie = (key: string) => {
    cookieStore.get(key)
  }

  const setCookies = (key: string, value: string) => {
    cookieStore.set(key, value)
  }

  const removeCookies = (key: string) => {
    cookieStore.delete(key)
  }
  return { getCookie, setCookies, removeCookies }
}

export default cookieManager
