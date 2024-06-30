import cookieManager from './cookieManager'

const IsAdmin = () => {
  const { getCookie } = cookieManager()
  const role = getCookie('userProfile')
  return role?.role === 'ROLE_ADMIN'
}
export default IsAdmin
