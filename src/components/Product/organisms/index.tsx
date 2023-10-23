import Rental from 'components/Home/organisms/Rental'
import { useRecoilValue } from 'recoil'
import { ProductChoice } from 'recoilAtoms'
import Button from '../../common/atoms/Button'
import ImgBox from '../molecules/ImgBox'
import ChoiceBox from '../molecules/ChoiceBox'
import InputBox from '../molecules/InputBox'
import ListBox from '../molecules/ListBox'
import * as S from './style'
import DeleteBtn from '../atom/DeleteBtn'
import DeleteBox from '../molecules/DeleteBox'

const Regist = () => {
  const choice = useRecoilValue(ProductChoice)

  const renderForm = () => {
    switch (choice) {
      case '물품 등록하기':
        return (
          <S.RegistWrapper>
            <ListBox />
            <InputBox />
            <ImgBox />
            <S.BtnBox>
              <Button text="등록하기" fontweight="700" />
            </S.BtnBox>
          </S.RegistWrapper>
        )
      case '물품 삭제하기':
        return (
          <S.DeleteWrapper>
            <DeleteBox />
          </S.DeleteWrapper>
        )
      default:
        return null
    }
  }

  return (
    <S.Wrapper>
      <ChoiceBox />
      {renderForm()}
    </S.Wrapper>
  )
}

export default Regist
