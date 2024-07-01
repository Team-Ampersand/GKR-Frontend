import { UserRoleType } from '../common/UserType'

export interface ButtonListPropsType {
  equipmentStatus: 'NOT_RENT' | 'WAITING' | 'RENTING' | 'REPAIRING' | undefined
  role: UserRoleType
  id: string | string[]
  apid?: number
}
