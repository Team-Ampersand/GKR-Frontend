'use client'

import * as S from './style'
import { useState } from 'react'
import ImageFrame from 'components/Detail/molecules/ImageFrame'
import Tag from 'components/common/atoms/Tag'
import ButtonList from 'components/Detail/molecules/ButtonList'
import { useRecoilState } from 'recoil'
import { roleType } from 'recoilAtoms'
import { useParams } from 'next/navigation'
import { Detaildummy } from 'asset/dummy/Detaildummy'
import { FilterListData } from 'asset/data/FilterListData'
import * as I from 'asset/svg'
interface getNameFromValuePropstype {
  list: {
    name: string
    value: string
    color?: string
  }[]
  valueToFind: string
}

export default function DetailBox({}) {
  // const router = useRouter();
  const [role, setRole] = useRecoilState(roleType)
  const [path, setPath] = useState()
  const [data, setData] = useState(Detaildummy)
  const Loading = {
    name: '로딩중',
    value: 'Loading',
  }

  const { name, id, imageUrl, description, equipmentStatus, equipmentType } =
    data

  const getNameFromValue = ({
    list,
    valueToFind,
  }: getNameFromValuePropstype) => {
    const item = list.find((item) => item.value === valueToFind)
    return item ? item : Loading
  }

  const equipmentTypeName = getNameFromValue({
    list: FilterListData.equipmentType,
    valueToFind: equipmentType,
  })

  const equipmentStatusName = getNameFromValue({
    list: FilterListData.equipmentStatusList,
    valueToFind: equipmentStatus,
  })

  return (
    <S.DetailWrapper>
      <ImageFrame />
      <S.TitleWrapper>
        <S.TopTitleWrapper>
          <S.Title>{`Raspberry pi 4`}</S.Title>
          <S.EditButton>
            <I.Edit_Outline />
            수정하기
          </S.EditButton>
        </S.TopTitleWrapper>
        <S.TagListWrapper>
          <Tag data={equipmentStatusName} role={role} />
          <Tag data={equipmentTypeName} role={role} />
        </S.TagListWrapper>
      </S.TitleWrapper>
      <S.ContentsWrapper>{`이 라즈베리 파이로 말할거같으면 1도 아니고 무려 4인 놀라운 성능을 지닌 라즈베리 파이다.
사양은 112에서 234한 236이다.`}</S.ContentsWrapper>
      <ButtonList equipmentStatus={'NOT_RENT'} renter={true} role={role} />
    </S.DetailWrapper>
  )
}
