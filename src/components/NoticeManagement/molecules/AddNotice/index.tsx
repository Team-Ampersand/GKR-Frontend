import * as S from './style'
import { useState, ChangeEvent } from 'react'
import ShotInput from 'components/common/atoms/ShotInput'
import Button from 'components/common/atoms/Button'
import TextareaAutoSize from 'react-textarea-autosize'
import { useMutation } from 'react-query'
import { NoticeController } from 'utils/libs/requestUrls'
import { postFormData } from 'utils/apis/data'
import * as I from 'asset/svg'
export default function AddNotice() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | undefined>(undefined)
  const url = NoticeController.postNoticeWrite()
  const { data, mutate } = useMutation(['Notice', url], () => {
    const formData = new FormData()
    // formData.append('file', )
    formData.append(
      'notice',
      JSON.stringify({
        title: title,
        content: content,
      }),
    )
    return postFormData(url, formData)
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.item(0)
    if (selectedFile !== null) setFile(selectedFile)
  }

  const postNotice = () => {
    mutate()
  }

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
          <TextareaAutoSize
            className="textarea"
            value={content}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setContent(e.target.value)}
          />
        </S.OptionWrapper>
        <S.OptionWrapper>
          <S.subTitle>이미지</S.subTitle>
          <S.ImageInput type="file" id="fileInput" onChange={handleChange} />
          <S.PreviewWrapper htmlFor="fileInput">
            {file && (
              <S.PreviewImage src={URL.createObjectURL(file)} alt="미리보기" />
            )}
            {}
          </S.PreviewWrapper>
        </S.OptionWrapper>
      </S.OptionWrapper>
      <Button
        text="작성완료"
        onclick={() => {}}
        width="100%"
        height="45px"
        color="#fff"
      />
    </S.AddNoticeWrapper>
  )
}
