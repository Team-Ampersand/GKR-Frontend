import { useState } from 'react'
import * as S from './style'
import InputItem from 'components/common/atoms/InputItem'
import ImgBox from 'components/common/ImgBox'
import Button from 'components/common/atoms/Button'
import { useMutation } from 'react-query'
import { EquipmentController } from 'utils/libs/requestUrls'
import { useParams } from 'next/navigation'
import { postFormData } from 'utils/apis/data'
import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'
import { FilterListData } from 'asset/data/FilterListData'
import { useRecoilValue } from 'recoil'
import { ProductList } from 'recoilAtoms'
import ListItem from 'components/Product/atom/Item/ListItem'

export default function DetailEdit() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | undefined>()
  const path = useParams()
  const url = EquipmentController.editEquipment(path.detail)
  const equipmentType = useRecoilValue(ProductList)

  const { mutate } = useMutation(
    [`equipment`, url],
    (data: any) => {
      return postFormData(url, data)
    },
    {
      onSuccess: () => {
        toast.success('기자재 수정 성공', toastOption)
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOption)
      },
    },
  )

  const EditEquipment = () => {
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
    <S.DetailEditWrapper>
      <S.Title>기자재 종류</S.Title>
      <S.TypeListWrapper>
        {FilterListData.equipmentType
          .filter((i) => i.name !== '전체')
          .map((i) => (
            <ListItem name={i.name} key={i.name} />
          ))}
      </S.TypeListWrapper>
      <S.InputListWrapper>
        <InputItem
          title="기자재 이름"
          placeholder="기자재의 이름을 입력해주세요."
          value={title}
          setValue={setTitle}
        />
        <InputItem
          title="기자재 설명"
          placeholder="기자재의 설명을 입력해주세요."
          value={content}
          setValue={setContent}
        />
      </S.InputListWrapper>
      <ImgBox imageValue={file} setImageValue={setFile} />
      <Button text="수정하기" width="200" height="44" onclick={EditEquipment} />
    </S.DetailEditWrapper>
  )
}
