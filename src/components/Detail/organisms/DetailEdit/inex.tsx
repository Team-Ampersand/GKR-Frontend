import { useState } from 'react'
import * as S from './style'
import InputItem from 'components/common/atoms/InputItem'
import ImgBox from 'components/common/ImgBox'
import Button from 'components/common/atoms/Button'

export default function DetailEdit() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | undefined>()
  return (
    <S.DetailEditWrapper>
      <S.InputListWrapper>
        <InputItem
          title="기자재 이름"
          placeholder="기자재의 이름을 입력해주세요."
          value={title}
          setValue={setTitle}
        />
        <InputItem
          title="기자재 설명"
          placeholder="기자재의 설명을 입력해주세요."
          value={content}
          setValue={setContent}
        />
      </S.InputListWrapper>
      <ImgBox imageValue={file} setImageValue={setFile} />
      <Button text="수정하기" width="200" height="44" onclick={() => {}} />
    </S.DetailEditWrapper>
  )
}
