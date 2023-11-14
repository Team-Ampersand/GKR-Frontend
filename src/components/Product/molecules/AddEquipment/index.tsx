import InputItem from 'components/Product/atom/Item/InputItem'
import ImgBox from '../Box/ImgBox'
import * as S from './style'
import { useState } from 'react'
import { FilterListData } from 'asset/data/FilterListData'
import ListItem from 'components/Product/atom/Item/ListItem'
import Button from 'components/common/atoms/Button'

export default function AddEquipment() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | undefined>(undefined)

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
          value={title}
          setValue={setTitle}
        />
        <InputItem
          title="기자재 설명"
          placeholder="기자재의 설명을 입력해주세요"
          value={content}
          setValue={setContent}
        />
      </S.InputWrapper>
      <ImgBox imageValue={file} setImageValue={setFile} />
      <S.ButtonWrapper>
        <Button text="등록하기" height="40px" onclick={() => {}} />
      </S.ButtonWrapper>
    </S.AddEquipmentWrapper>
  )
}
