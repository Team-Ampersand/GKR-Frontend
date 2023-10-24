import RentalList from 'components/common/molecules/RentalList'
import * as S from './style'
import Filter from 'components/Home/molecules/Filter'
import DeleteBtn from 'components/Product/atom/DeleteBtn'
export default function DeleteBox() {
  return (
    <S.RentalWrapper>
      <S.ToolBox>
        <Filter />
        <DeleteBtn />
      </S.ToolBox>
      <S.LineWrapper />
      <RentalList />
    </S.RentalWrapper>
  )
}
