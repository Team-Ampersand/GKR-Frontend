import TopBox from '../TopBox'
import * as S from './style'
import ImageFrame from 'components/Detail/molecules/ImageFrame'
interface Props {
  id: string | string[]
  title: string
  imageUrl?: string | null
  createNoticeDate: string
  content: string
}

const DetailBox = ({
  id,
  title,
  imageUrl,
  createNoticeDate,
  content,
}: Props) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>
          {'[공지사항] - '}
          {title}
        </S.Title>
        <S.date>{createNoticeDate}</S.date>
      </S.TitleWrapper>
      {imageUrl ? <ImageFrame url={imageUrl} /> : null}
      <S.ContentsWrapper>{content}</S.ContentsWrapper>
    </S.Wrapper>
  )
}

export default DetailBox
