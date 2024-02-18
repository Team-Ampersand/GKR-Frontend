import { TagPropsType } from 'types/components/common/TagsTypes'
import * as S from './style'
import { Palette } from 'style/global'
export default function Tag({ data, role }: TagPropsType) {
  return (
    <S.tagWrapper
      BackgroundColor={
        data.color
          ? data.color
          : role === 'admin'
          ? Palette.PRIMARY_P5
          : Palette.PRIMARY_P2
      }
    >
      {data.name}
    </S.tagWrapper>
  )
}
