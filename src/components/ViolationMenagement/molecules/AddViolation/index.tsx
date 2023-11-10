import { useState } from 'react'
import * as S from './style'
import ShotInput from 'components/common/atoms/ShotInput'
import Button from 'components/common/atoms/Button'

export default function AddViolation() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
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
          value={email}
          setValue={setEmail}
          placeholder={'제재 사유를 입력해주세요'}
        />
      </S.OptionWrapper>
      <S.PaddingWrapper />
      <Button
        text={'제재하기'}
        width="100%"
        height="50px"
        onclick={() => {}}
        color="#fff"
      />
    </S.AddViolation>
  )
}
