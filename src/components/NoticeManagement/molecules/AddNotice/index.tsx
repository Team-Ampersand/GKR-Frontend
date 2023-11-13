import * as S from './style'
import { useState, ChangeEvent } from 'react'
import ShotInput from 'components/common/atoms/ShotInput'
import Button from 'components/common/atoms/Button'
import TextareaAutoSize from 'react-textarea-autosize'
import { useMutation } from 'react-query'
import { NoticeController } from 'utils/libs/requestUrls'
import { postFormData } from 'utils/apis/data'
import * as I from 'asset/svg'
import { toast } from 'react-toastify'
export default function AddNotice() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | undefined>(undefined)
  const url = NoticeController.postNoticeWrite()

  const { data, mutate } = useMutation(
    ['Notice', url],
    (data: any) => {
      return postFormData(url, data)
    },
    {
      onSuccess: () => {
        toast.success('성공')
      },
      onError: () => {
        toast.error('에러')
      },
    },
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.item(0)
    if (selectedFile !== null) setFile(selectedFile)
  }

  const postNotice = () => {
    const formData = new FormData()

    if (file) {
      const imageFile = new File([file], 'noticeImage.png', {
        type: 'image/png',
      })
      formData.append('file', imageFile)
    }

    formData.append(
      'notice',
      new Blob(
        [
          JSON.stringify({
            title: title,
            content: content,
          }),
        ],
        { type: 'application/json' },
      ),
    )
    mutate(formData)
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
          <S.ImageInput type="file" id="fileInput" onChange={handleChange} />
          <S.PreviewWrapper htmlFor="fileInput">
            {file ? (
              <S.PreviewImage src={URL.createObjectURL(file)} alt="미리보기" />
            ) : (
              <S.defaultImage>
                <I.Camera />
                이미지 업로드
              </S.defaultImage>
            )}
          </S.PreviewWrapper>
        </S.OptionWrapper>
      </S.OptionWrapper>
      <Button
        text="작성완료"
        onclick={postNotice}
        width="100%"
        height="45px"
        color="#fff"
      />
    </S.AddNoticeWrapper>
  )
}
