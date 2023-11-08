import { MGMTListItemPropsType } from 'types/components/common/MGMTListType'
import * as S from './style'
import { RequestData } from 'asset/data/RequestData'

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
}: MGMTListItemPropsType) {
  const Loading = {
    name: '로딩중',
    value: 'Loading',
    color: '#C2C2C2',
  }

  const getNameFromValue = ({
    list,
    valueToFind,
  }: getNameFromValuePropstype) => {
    const item = list.find((item) => item.value === valueToFind)
    return item ? item : Loading
  }

  return (
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
  )
}
