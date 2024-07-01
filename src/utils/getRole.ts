import cookieManager from './cookieManager'
import { UserRoleType } from 'types/components/common/UserType'

const getRole = (): UserRoleType => {
  const { getCookie } = cookieManager()
  const profile = getCookie('userProfile')
  console.log(profile)
  return profile?.role && null
}
export default getRole
