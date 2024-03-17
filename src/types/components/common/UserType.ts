interface UserTypes {
  name: string
  grade: number
  classNum: number
  stuNum: number
  rentalRestricted: boolean
  role: 'ROLE_STUDENT' | 'ROLE_ADMIN' | 'ROLE_TEACHER'
  email: string
}
export default UserTypes
