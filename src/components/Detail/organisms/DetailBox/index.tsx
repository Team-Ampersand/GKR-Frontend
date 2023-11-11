'use client'

import { FilterListData } from 'asset/data/FilterListData'
import * as I from 'asset/svg'
import ButtonList from 'components/Detail/molecules/ButtonList'
import ImageFrame from 'components/Detail/molecules/ImageFrame'
import Tag from 'components/common/atoms/Tag'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { roleType } from 'recoilAtoms'
import { getDetail } from 'utils/apis/equipment'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'
interface getNameFromValuePropstype {
  list: {
    name: string
    value: string
    color?: string
  }[]
  valueToFind: string | undefined
}
interface DetailProps {
  id: string
  name: string
  imageUrl: string
  description: string
  userId: any
  equipmentStatus: string
  equipmentType: string
}

export default function DetailBox({}) {
  const [role, setRole] = useRecoilState(roleType)
  const params = useParams()
  const url = EquipmentController.getDetail(params.detail)
  const { data } = useQuery(
    ['equipment', url],
    () => {
      return getDetail(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  const [detailData, setData] = useState<DetailProps | undefined>()

  useEffect(() => {
    if (data?.data) {
      setData(data.data)
    }
  }, [data])
  const Loading = {
    name: '로딩중',
    value: 'Loading',
  }
  const getNameFromValue = ({
    list,
    valueToFind,
  }: getNameFromValuePropstype) => {
    const item = list.find((item) => item.value === valueToFind)
    return item ? item : Loading
  }

  const equipmentTypeName = getNameFromValue({
    list: FilterListData.equipmentType,
    valueToFind: detailData?.equipmentType,
  })

  const equipmentStatusName = getNameFromValue({
    list: FilterListData.equipmentStatusList,
    valueToFind: detailData?.equipmentStatus,
  })

  return (
    <S.DetailWrapper>
      <ImageFrame url={detailData?.imageUrl} />
      <S.TitleWrapper>
        <S.TopTitleWrapper>
          <S.Title>{detailData?.name}</S.Title>
          {role === 'admin' ? (
            <S.EditButton>
              <I.Edit_Outline />
              수정하기
            </S.EditButton>
          ) : null}
        </S.TopTitleWrapper>
        <S.TagListWrapper>
          <Tag data={equipmentStatusName} role={role} />
          <Tag data={equipmentTypeName} role={role} />
        </S.TagListWrapper>
      </S.TitleWrapper>
      <S.ContentsWrapper>{detailData?.description}</S.ContentsWrapper>
      <ButtonList equipmentStatus={'NOT_RENT'} renter={true} role={role} />
    </S.DetailWrapper>
  )
}
