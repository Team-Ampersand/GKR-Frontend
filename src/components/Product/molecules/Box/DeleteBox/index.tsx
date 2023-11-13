import RentalList from 'components/common/molecules/RentalList'
import * as S from './style'
import Filter from 'components/Home/molecules/Filter'
import DeleteBtn from 'components/Product/atom/Item/DeleteBtn'
import { useState } from 'react'
import DeleteModal from 'components/Product/atom/modal/DeleteModal'
interface DeleteBoxPropsType {
  setPage: React.Dispatch<React.SetStateAction<string>>
}
export default function DeleteBox({ setPage }: DeleteBoxPropsType) {
  const [modal, setModal] = useState(false)
  return (
    <S.RentalWrapper>
      <S.ToolBox>
        <Filter />
        <DeleteBtn setModal={setModal} />
      </S.ToolBox>
      <S.LineWrapper />
      <RentalList />
      {modal ? <DeleteModal setPage={setPage} setModal={setModal} /> : null}
    </S.RentalWrapper>
  )
}
