import { ProductChoice } from 'recoilAtoms'
import Button from '../../common/atoms/Button'
import ChoiceBox from '../molecules/ChoiceBox'
import InputBox from '../molecules/InputBox'
import ListBox from '../molecules/ListBox'
import ImgBox from '../molecules/\bImgBox'
import * as S from './style'
import { useRecoilValue } from 'recoil'

const Regist = () => {
  const choice = useRecoilValue(ProductChoice)

  const renderForm = () => {
    switch (choice) {
      case '물품 등록하기':
        return (
          <>
            <ChoiceBox />
            <ListBox />
            <InputBox />
            <ImgBox />
          </>
        )
      case '물품 삭제하기':
        return <ChoiceBox /> 
      default:
        return null
    }
  }

  return (
    <S.Wrapper>
      <S.TopBox>{renderForm()}</S.TopBox>
      {choice === '물품 등록하기' && (
        <S.BtnBox>
          <Button text="등록하기" fontweight="700" />
        </S.BtnBox>
      )}
    </S.Wrapper>
  )
}

export default Regist
