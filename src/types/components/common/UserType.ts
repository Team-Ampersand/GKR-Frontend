interface UserTypes {
  id: number
  name: string
  grade: number
  classNum: number
  stuNum: number
  rentalRestricted: boolean
  profileUrl: string
  role: UserRoleType
  email: string
}

export type UserRoleType = 'ROLE_STUDENT' | 'ROLE_ADMIN' | 'ROLE_TEACHER'

export interface UserListTypes extends Array<UserTypes> {}

export default UserTypes
