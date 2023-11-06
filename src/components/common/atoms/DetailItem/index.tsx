import * as S from './style'

interface Props {
  id: number | undefined
  title: string | undefined
  imgurl: string | undefined
  content: string | undefined
  createNoticeDate: string | undefined
}

const DetailItem = ({
  title,
  imgurl,
  content,
  createNoticeDate,
  id,
}: Props) => {
  return (
    <S.Wrapper>
      {id}
      <br />
      {imgurl}
      {content}
      {createNoticeDate}
      {title}
    </S.Wrapper>
  )
}
export default DetailItem
