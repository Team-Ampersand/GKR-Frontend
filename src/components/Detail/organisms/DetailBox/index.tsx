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
      <ImageFrame url={'d'} />
      <S.TitleWrapper>
        <S.TopTitleWrapper>
          <S.Title>{name}</S.Title>
          {role === 'admin' ? (
            <S.EditButton>
              <I.Edit_Outline stroke="#865DFF" />
              수정하기
            </S.EditButton>
          ) : null}
        </S.TopTitleWrapper>
        <S.TagListWrapper>
          <Tag data={equipmentStatusName} role={role} />
          <Tag data={equipmentTypeName} role={role} />
        </S.TagListWrapper>
      </S.TitleWrapper>
      <S.ContentsWrapper>{description}</S.ContentsWrapper>
      <ButtonList equipmentStatus={'NOT_RENT'} renter={true} role={role} />
    </S.DetailWrapper>
  )
}
