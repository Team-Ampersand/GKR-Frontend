import * as S from './style'
import { FilterListData } from 'asset/data/FilterListData'
import Tag from 'components/common/atoms/Tag'
import Link from 'next/link'
import { RentalItemPropsType } from 'types/components/Rental/RentalType'
import { Palette } from 'style/global'

interface getNameFromValuePropstype {
  list: {
    name: string
    value: string
    color: string
  }[]
  valueToFind: string
}

export default function RentalItem({
  thumbnail,
  title,
  tag,
  student,
  rentalStartDate,
  rentalEndDate,
  tagVisible,
  id,
  periodColor,
}: RentalItemPropsType) {
  const Loading = {
    name: '로딩중',
    value: 'Loading',
    color: Palette.NATURAL_N4,
  }
  const replaceDate = (date: string): string => {
    return date.split('T')[0].replace(/-/g, '.')
  }
  const getNameFromValue = ({
    list,
    valueToFind,
  }: getNameFromValuePropstype) => {
    const item = list.find((item) => item.value === valueToFind)
    return item ? item : Loading
  }

  const equipmentStatusName = getNameFromValue({
    list: FilterListData.equipmentStatusList,
    valueToFind: tag,
  })

  return (
    <Link href={`/home/${id}`}>
      <S.ListItemWrapper>
        <S.TitleWrapper>
          <S.thumbnailWrapper>
            <img src={thumbnail} />
          </S.thumbnailWrapper>
          <S.Title>{title}</S.Title>
          <Tag data={equipmentStatusName} role="admin" />
        </S.TitleWrapper>
        <S.informationWrapper>
          <S.studentWrapper>대여 학생: {student}</S.studentWrapper>
          <S.periodWrapper periodColor={periodColor}>
            {replaceDate(rentalStartDate) + ' ~ ' + replaceDate(rentalEndDate)}
          </S.periodWrapper>
        </S.informationWrapper>
      </S.ListItemWrapper>
    </Link>
  )
}
