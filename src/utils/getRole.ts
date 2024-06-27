import cookieManager from './cookieManager'

const getRole = () => {
  const { getCookie } = cookieManager()
  const profile = getCookie('userProfile')
  return profile.role
}
export default getRole
