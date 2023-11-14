import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'
const IsAdmin = () => {
  const role = useRecoilValue(roleType)
  return role === 'admin'
}
export default IsAdmin
