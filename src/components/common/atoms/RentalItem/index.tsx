'use client'

import { FilterListData } from 'asset/data/FilterListData'
import Tag from 'components/common/atoms/Tag'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { DeleteChoice } from 'recoilAtoms'
import { RentalItemPropsType } from 'types/components/Home/RentalTypes'
import * as S from './style'

interface getNameFromValuePropstype {
  list: {
    name: string
    value: string
    color?: string
  }[]
  valueToFind: string
}

function RentalItem({
  id,
  applicationId,
  title,
  imageUrl,
  description,
  equipmentType,
  equipmentStatus,
  role,
}: RentalItemPropsType) {
  const Loading = {
    name: '로딩중',
    value: 'Loading',
  }
  const [deleteIds, setDeleteIds] = useRecoilState(DeleteChoice)
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
  const handleCheckboxChange = () => {
    if (isProductManagementPage) {
      if (deleteIds.includes(id)) {
        setDeleteIds(deleteIds.filter((deleteId) => deleteId !== id))
      } else {
        setDeleteIds([...deleteIds, id])
      }
    }
  }
  const LinkBox = () => {
    if (isProductManagementPage) {
      return <Layer />
    } else if (!isProductManagementPage) {
      return (
        <Link href={`/home/${id}`}>
          <Layer />
        </Link>
      )
    }
  }
  console.log(applicationId)
  const Layer = () => {
    return (
      <S.Layer onClick={() => {}}>
        <S.CheckWrapper>
          {isProductManagementPage && (
            <S.Check
              type="checkbox"
              checked={deleteIds.includes(id)}
              onChange={handleCheckboxChange}
            />
          )}
        </S.CheckWrapper>
        <S.imageFrameWrapper>
          <img src={imageUrl} alt="기자재 사진" />
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
  return <LinkBox />
}

export default RentalItem
