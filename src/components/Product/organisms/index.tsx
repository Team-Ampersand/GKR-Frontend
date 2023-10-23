import Button from '../../common/atoms/Button'
import ImgBox from '../molecules/ImgBox'
import ChoiceBox from '../molecules/ChoiceBox'
import InputBox from '../molecules/InputBox'
import ListBox from '../molecules/ListBox'
import * as S from './style'

const Regist = () => {
  return (
    <S.Wrapper>
      <S.TopBox>
        <ChoiceBox />
        <ListBox />
        <InputBox />
        <ImgBox />
      </S.TopBox>
      <S.BtnBox>
        <Button text="등록하기" fontweight="700" />
      </S.BtnBox>
    </S.Wrapper>
  )
}

export default Regist
