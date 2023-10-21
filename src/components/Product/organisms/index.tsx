import Button from '../../common/atoms/Button'
import ImgBox from '../molecules/ImgBox'
import InputBox from '../molecules/InputBox'
import * as S from './style'

const Regist = () => {
  return (
    <S.Wrapper>
      <InputBox />
      <ImgBox />
      <S.BtnBox>
        <Button text="등록하기" fontweight="700" />
      </S.BtnBox>
    </S.Wrapper>
  )
}

export default Regist
