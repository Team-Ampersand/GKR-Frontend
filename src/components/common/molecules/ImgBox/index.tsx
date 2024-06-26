import * as I from 'asset/svg'
import * as S from './style'
import { ChangeEvent } from 'react'
import imageCompression from 'browser-image-compression'

interface ImgBoxPropsType {
  imageValue: File | undefined | string
  setImageValue: React.Dispatch<React.SetStateAction<File | undefined>>
}

const ImgBox = ({ imageValue, setImageValue }: ImgBoxPropsType) => {
  const onChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.item(0)

    if (selectedFile !== null && selectedFile !== undefined) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
      try {
        const compressedFile = await imageCompression(selectedFile, options)
        console.log(
          'compressedFile instanceof Blob',
          compressedFile instanceof Blob,
        ) // true
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`,
        ) // smaller than maxSizeMB

        await setImageValue(compressedFile) // write your own logic
      } catch (error) {
        console.log(error)
      }
    }
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
            typeof imageValue === 'string' ? (
              <S.PreviewImage src={imageValue} alt="미리보기" />
            ) : (
              <S.PreviewImage
                src={URL.createObjectURL(imageValue)}
                alt="미리보기"
              />
            )
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
