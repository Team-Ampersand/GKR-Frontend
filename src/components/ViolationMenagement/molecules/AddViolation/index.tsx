import Button from 'components/common/atoms/Button'
import ShotInput from 'components/common/atoms/ShotInput'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { postData } from 'utils/apis/data'
import { ViolationController } from 'utils/libs/requestUrls'
import toastOption from 'utils/libs/toastOption'
import * as S from './style'

interface AddViolationPropsType {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function AddViolation({ setPage }: AddViolationPropsType) {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const url = ViolationController.violation()
  const router = useRouter()
  const { mutate } = useMutation(
    ['violation', url],
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
  const postViolation = () => {
    mutate()
  }
  return (
    <S.AddViolation>
      <S.Title>사용자 제재</S.Title>
      <S.OptionWrapper>
        <S.subTitle>사용자 이메일</S.subTitle>
        <ShotInput
          value={email}
          setValue={setEmail}
          placeholder={'이메일을 입력해주세요'}
        />
      </S.OptionWrapper>
      <S.OptionWrapper>
        <S.subTitle>제재 사유</S.subTitle>
        <ShotInput
          value={reason}
          setValue={setReason}
          placeholder={'제재 사유를 입력해주세요'}
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
  )
}
