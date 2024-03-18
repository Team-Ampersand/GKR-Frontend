import Button from 'components/common/atoms/Button'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { getData, postData } from 'utils/apis/data'
import { UserController, ViolationController } from 'utils/libs/requestUrls'
import toastOption from 'utils/libs/toastOption'
import * as S from './style'
import UserList from 'components/ViolationMenagement/molecules/UserList'
import { UserListTypes } from 'types/components/common/UserType'

interface AddViolationPropsType {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

interface AllUserDataType {
  data: {
    usersList: UserListTypes
  }
}

export default function AddViolation({ setPage }: AddViolationPropsType) {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const url = ViolationController.violation()
  const getAllUserUrl = UserController.allUser()
  const { mutate } = useMutation(
    ['addViolation', url],
    () => {
      const body = {
        email: email,
        violationReason: reason,
      }
      return postData(url, body)
    },
    {
      onSuccess: () => {
        setPage('제재 목록')
        toast.success('제재에 성공하였습니다.', toastOption)
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOption)
      },
    },
  )

  const { isLoading, data } = useQuery<AllUserDataType>(['getAllUser'], () => {
    return getData(getAllUserUrl)
  })

  const postViolation = () => {
    if (email.length <= 0)
      toast.error('재제할 사람을 선택해주세요', toastOption)
    mutate()
  }

  return (
    <S.Positioner>
      <UserList
        userList={data?.data?.usersList}
        violationEmail={email}
        setViolationEmail={setEmail}
        isLoading={isLoading}
      />
      <S.AddViolation>
        <S.Title>사용자 제재</S.Title>
        <S.OptionWrapper>
          <S.subTitle>제재 사유</S.subTitle>
          <textarea
            value={reason}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setReason(e.target.value)}
          />
        </S.OptionWrapper>
        <S.PaddingWrapper />
        <Button
          text={'제재하기'}
          width="100%"
          height="50px"
          onclick={postViolation}
          color="#fff"
        />
      </S.AddViolation>
    </S.Positioner>
  )
}
