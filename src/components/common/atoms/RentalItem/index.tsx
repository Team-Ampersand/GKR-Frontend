'use client'

import * as S from './style'
import Tag from 'components/common/atoms/Tag'
import { RentalItemPropsType } from 'types/components/Home/RentalTypes'
import { FilterListData } from 'asset/data/FilterListData'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

interface getNameFromValuePropstype {
  list: {
    name: string
    value: string
    color?: string
  }[]

  valueToFind: string
}

const RentalItem = ({
  id,
  title,
  imageUrl,
  description,
  equipmentType,
  equipmentStatus,
  role,
}: RentalItemPropsType) => {
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
    valueToFind: equipmentType,
  })

  const equipmentStatusName = getNameFromValue({
    list: FilterListData.equipmentStatusList,
    valueToFind: equipmentStatus,
  })

  const router = usePathname()
  const isProductManagementPage = router === '/productmanagement'

  return (
    <S.Layer onClick={() => {}}>
      <S.CheckWrapper>
        {isProductManagementPage && <S.Check type="checkbox" />}
      </S.CheckWrapper>
      <S.imageFrameWrapper>
        <img
          src="https://s3.orbi.kr/data/file/united/e533d1c052be4ae83b34ddf643989ae0.jpg"
          alt=""
        />
      </S.imageFrameWrapper>
      <S.ContentBox>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.descriptionWrapper>{description}</S.descriptionWrapper>
        </S.TitleWrapper>
        <S.TagListWrapper>
          <Tag data={equipmentStatusName} role={role} />
          <Tag data={equipmentTypeName} role={role} />
        </S.TagListWrapper>
      </S.ContentBox>
    </S.Layer>
  )
}

export default RentalItem
