import UserListItem from 'components/ViolationMenagement/atoms/UserListItem'
import * as S from './style'
import { UserListTypes } from 'types/components/common/UserType'
import { Dispatch, SetStateAction } from 'react'

interface UserListpropsType {
  userList?: UserListTypes
  violationEmail: string
  setViolationEmail: Dispatch<SetStateAction<string>>
  isLoading: boolean
}

const UserList = ({
  userList,
  setViolationEmail,
  violationEmail,
  isLoading,
}: UserListpropsType) => {
  return (
    <S.UserListWrapper>
      {userList?.map((user) => (
        <UserListItem
          name={user.name}
          grade={user.grade}
          classNum={user.classNum}
          stuNum={user.stuNum}
          rentalRestricted={user.rentalRestricted}
          email={user.email}
          role={user.role}
          violationEmail={violationEmail}
          setViolationEmail={setViolationEmail}
          id={user.id}
          profileUrl={user.profileUrl}
          key={user.id}
        />
      ))}
    </S.UserListWrapper>
  )
}

export default UserList
