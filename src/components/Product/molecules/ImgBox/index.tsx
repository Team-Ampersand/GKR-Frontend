import * as I from 'asset/svg'
import * as S from './style'
import { useForm } from 'react-hook-form'

const ImgBox = () => {
  const { register } = useForm({})

  const onChangeImg = () => {}

  return (
    <>
      <S.Wrapper>
        <S.ImgInput
          type="file"
          id="imgInput"
          {...register('img', {
            onChange: () => {
              onChangeImg()
            },
          })}
        />
        <S.ImgLabel htmlFor="imgInput">
          <S.Icon>
            <I.Camera />
            <p>이미지 업로드</p>
          </S.Icon>
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
