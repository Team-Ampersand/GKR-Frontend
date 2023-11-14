import { useRecoilValue } from 'recoil'
import { ProductChoice } from 'recoilAtoms'
import Button from '../../../common/atoms/Button'
import ChoiceBox from 'components/common/molecules/ChoiceBox'
import DeleteBox from '../../molecules/Box/DeleteBox'
import ImgBox from '../../molecules/Box/ImgBox'
import InputBox from '../../molecules/Box/InputBox'
import ListBox from '../../molecules/Box/ListBox'
import * as S from './style'
import { useState } from 'react'
import AddEquipment from 'components/Product/molecules/AddEquipment'

const Regist = () => {
  const [pageState, setPageState] = useState('물품 등록하기')
  return (
    <S.Wrapper>
      <ChoiceBox
        data={['물품 등록하기', '물품 삭제하기']}
        value={pageState}
        setValue={setPageState}
      />
      {pageState === '물품 등록하기' ? (
        <AddEquipment />
      ) : (
        <DeleteBox setPage={setPageState} />
      )}
    </S.Wrapper>
  )
}

export default Regist
