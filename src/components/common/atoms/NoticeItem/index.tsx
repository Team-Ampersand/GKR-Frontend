interface NoticeItemPropsType {
  title: string
  id?: number
  createNoticeDate: string
  content: string
}

import Link from 'next/link'
import * as S from './style'

function formatDate(inputDate: string) {
  const parsedDate = new Date(inputDate)
  const year = parsedDate.getFullYear()
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0')
  const day = parsedDate.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return `[${title.slice(0, maxLength - 3)}...]`
  }
  return `[${title}]`
}

const NoticeItem = ({
  id,
  title,
  content,
  createNoticeDate,
}: NoticeItemPropsType) => {
  const formattedDate = formatDate(createNoticeDate)
  const truncatedTitle = truncateTitle(title, 20)

  return (
    <Link href={`/notice/${id}`}>
      <S.NoticeItemWrapper>
        <S.Top>
          <S.Title>{truncatedTitle}</S.Title>
          <S.Date>{formattedDate}</S.Date>
        </S.Top>
        <S.Content>{content}</S.Content>
      </S.NoticeItemWrapper>
    </Link>
  )
}

export default NoticeItem
