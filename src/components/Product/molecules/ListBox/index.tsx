import ListItem from 'components/Product/atom/Item/ListItem'
import * as S from './style'

const ListBox = () => {
  return (
    <S.Wrapper>
      <S.Title>기자재 종류</S.Title>
      <S.ListBox>
        <ListItem name="노트북" />
        <ListItem name="키보드" />
        <ListItem name="핸드폰" />
        <ListItem name="모니터" />
        <ListItem name="라즈베리파이" width="125" />
        <ListItem name="소모품" />
        <ListItem name="기타" width="70" />
      </S.ListBox>
    </S.Wrapper>
  )
}

export default ListBox
