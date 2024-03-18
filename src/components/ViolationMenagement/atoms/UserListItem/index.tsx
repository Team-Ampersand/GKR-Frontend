import Image from 'next/image'
import * as S from './style'
import * as I from 'asset/svg'
import { Dispatch, SetStateAction } from 'react'
import UserTypes from 'types/components/common/UserType'

interface UserListProps extends UserTypes {
  violationEmail: string
  setViolationEmail: Dispatch<SetStateAction<string>>
}

const UserListItem = ({
  name,
  grade,
  classNum,
  stuNum,
  rentalRestricted,
  role,
  email,
  violationEmail,
  setViolationEmail,
}: UserListProps) => {
  const isFocus = violationEmail === email
  return (
    <S.Wrapper
      onClick={() => setViolationEmail(isFocus ? '' : email)}
      isFocus={isFocus}
    >
      <div>
        <I.Profile />
        <p>{name}</p>
      </div>
      <p>{[grade, classNum, stuNum].map((i) => i.toString()).join('')}</p>
      <p>{rentalRestricted ? '대여정지' : '정상'}</p>
      <p>{role}</p>
    </S.Wrapper>
  )
}

export default UserListItem
