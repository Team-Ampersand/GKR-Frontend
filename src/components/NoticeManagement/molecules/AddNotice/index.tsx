import * as S from './style'
import { useState } from 'react'
import ShotInput from 'components/common/atoms/ShotInput'
export default function AddNotice() {
  const [title, setTitle] = useState('')
  return (
    <S.AddNoticeWrapper>
      <S.Title>공지사항 작성</S.Title>
      <S.OptionWrapper>
        <S.subTitle>제목</S.subTitle>
        <ShotInput
          value={title}
          setValue={setTitle}
          placeholder={'제목을 입력해주세요'}
        />
        <S.OptionWrapper>
          <S.subTitle>공지사항 내용</S.subTitle>
        </S.OptionWrapper>
      </S.OptionWrapper>
    </S.AddNoticeWrapper>
  )
}
