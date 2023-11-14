import InputItem from 'components/Product/atom/Item/InputItem'
import ImgBox from '../Box/ImgBox'
import InputBox from '../Box/InputBox'
import ListBox from '../Box/ListBox'
import * as S from './style'
import { FilterListData } from 'asset/data/FilterListData'
import ListItem from 'components/Product/atom/Item/ListItem'

export default function AddEquipment() {
  return (
    <S.AddEquipmentWrapper>
      <S.TypeWrapper>
        <S.TypeWrapper>
          <S.Title>기자재 종류</S.Title>
          <S.TypeListWrapper>
            {FilterListData.equipmentType
              .filter((i) => i.name !== '전체')
              .map((i) => (
                <ListItem name={i.name} key={i.name} />
              ))}
          </S.TypeListWrapper>
        </S.TypeWrapper>
      </S.TypeWrapper>
      <S.InputWrapper>
        <InputItem
          title="기자재 이름"
          placeholder="기자재의 이름을 입력해주세요"
        />
        <InputItem
          title="기자재 설명"
          placeholder="기자재의 설명을 입력해주세요"
        />
      </S.InputWrapper>
      <ImgBox />
    </S.AddEquipmentWrapper>
  )
}
