import Button from '../../common/atoms/Button'
import BannerBox from '../molecules/BannerBox'
import InputBox from '../molecules/InputBox'
import * as S from './style'

const Regist = () => {
  return (
    <S.Wrapper>
      <BannerBox />
      <InputBox />
      <S.BtnBox>
        <Button text="등록하기" fontweight="700" />
      </S.BtnBox>
    </S.Wrapper>
  )
}

export default Regist
