import * as I from 'asset/svg'
import * as S from './style'
import { ChangeEvent } from 'react'
interface ImgBoxPropsType {
  imageValue: File | undefined
  setImageValue: React.Dispatch<React.SetStateAction<File | undefined>>
}

const ImgBox = ({ imageValue, setImageValue }: ImgBoxPropsType) => {
  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.item(0)
    if (selectedFile !== null) setImageValue(selectedFile)
  }

  return (
    <>
      <S.Wrapper>
        <S.ImgInput
          type="file"
          id="imgInput"
          onChange={onChangeImg}
          accept="image/png, image/jpeg"
        />
        <S.ImgLabel htmlFor="imgInput">
          {imageValue ? (
            <S.PreviewImage
              src={URL.createObjectURL(imageValue)}
              alt="미리보기"
            />
          ) : (
            <S.Icon>
              <I.Camera />
              <p>이미지 업로드</p>
            </S.Icon>
          )}
        </S.ImgLabel>
      </S.Wrapper>
      <S.Caution>
        <I.Caution />
        <p>이미지 용량 제한은 25MB입니다.</p>
      </S.Caution>
    </>
  )
}

export default ImgBox
