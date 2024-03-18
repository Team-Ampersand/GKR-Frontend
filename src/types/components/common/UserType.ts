interface UserTypes {
  id: number
  name: string
  grade: number
  classNum: number
  stuNum: number
  rentalRestricted: boolean
  profileUrl: string
  role: 'ROLE_STUDENT' | 'ROLE_ADMIN' | 'ROLE_TEACHER'
  email: string
}

export interface UserListTypes extends Array<UserTypes> {}

export default UserTypes
