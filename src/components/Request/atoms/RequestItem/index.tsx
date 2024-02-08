import { MGMTListItemPropsType } from 'types/components/common/MGMTListType'
import * as S from './style'
import { RequestData } from 'asset/data/RequestData'
import Link from 'next/link'
import { Palette } from 'style/global'

interface getNameFromValuePropstype {
  list: {
    name: string
    value: string
    color: string
  }[]
  valueToFind: string
}
export default function MGMTListItem({
  thumbnail,
  title,
  tag,
  student,
  period,
  tagVisible,
  id,
}: MGMTListItemPropsType) {
  const Loading = {
    name: '로딩중',
    value: 'Loading',
    color: Palette.NATURAL_N4,
  }
  const getNameFromValue = ({
    list,
    valueToFind,
  }: getNameFromValuePropstype) => {
    const item = list.find((item) => item.value === valueToFind)
    return item ? item : Loading
  }
  return (
    <Link href={`request/${id}`}>
      <S.ListItemWrapper>
        <S.TitleWrapper>
          <S.thumbnailWrapper>
            <img src={thumbnail} />
          </S.thumbnailWrapper>
          <S.Title>{title}</S.Title>
          <S.tag
            backgroundColor={
              getNameFromValue({
                list: RequestData,
                valueToFind: tag,
              }).color
            }
          >
            {
              getNameFromValue({
                list: RequestData,
                valueToFind: tag,
              }).name
            }
          </S.tag>
        </S.TitleWrapper>
        <S.informationWrapper>
          <S.studentWrapper>{student}</S.studentWrapper>
          <S.periodWrapper>{period}</S.periodWrapper>
        </S.informationWrapper>
      </S.ListItemWrapper>
    </Link>
  )
}
