import { UserRoleType } from './UserType'

export interface TagPropsType {
  data: {
    name: string
    value: string
    color?: string
  }
  role?: UserRoleType
}
