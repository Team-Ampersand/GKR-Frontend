import InputItem from 'components/common/atoms/InputItem'
import ImgBox from '../../../common/ImgBox'
import * as S from './style'
import { useState } from 'react'
import { FilterListData } from 'asset/data/FilterListData'
import ListItem from 'components/Product/atom/Item/ListItem'
import Button from 'components/common/atoms/Button'
import { useMutation } from 'react-query'
import { postFormData } from 'utils/apis/data'
import { EquipmentController } from 'utils/libs/requestUrls'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import { ProductList } from 'recoilAtoms'
import toastOption from 'utils/libs/toastOption'
import { useRouter } from 'next/navigation'

export default function AddEquipment() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | undefined>(undefined)
  const url = EquipmentController.createEquipment()
  const equipmentType = useRecoilValue(ProductList)
  const router = useRouter()
  const { mutate } = useMutation(
    ['equipment', url],
    (data: any) => {
      return postFormData(url, data)
    },
    {
      onSuccess: () => {
        toast.success('기자재 추가 성공', toastOption)
        router.push('/home')
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOption)
      },
    },
  )

  const addEquipment = () => {
    const formData = new FormData()
    const Type = FilterListData.equipmentType.filter(
      (i) => i.name == equipmentType,
    )[0].value
    console.log(Type, title, content)
    if (file) {
      const imageFile = new File([file], 'noticeImage.png', {
        type: 'image/png',
      })
      formData.append('file', imageFile)
    } else {
      toast.error('이미지를 추가해주세요')
      return
    }

    formData.append(
      'equipment',
      new Blob(
        [
          JSON.stringify({
            name: title,
            description: content,
            equipmentType: Type,
          }),
        ],
        { type: 'application/json' },
      ),
    )
    mutate(formData)
  }

  return (
    <S.AddEquipmentWrapper>
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
        <Button text="등록하기" height="40px" onclick={addEquipment} />
      </S.ButtonWrapper>
    </S.AddEquipmentWrapper>
  )
}
