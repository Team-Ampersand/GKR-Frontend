interface NoticeItemPropsType {
  title: string
  id?: number
  createNoticeDate: string
  content: string
}

import * as S from './style'

function formatDate(inputDate: string) {
  const parsedDate = new Date(inputDate)
  const year = parsedDate.getFullYear()
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0')
  const day = parsedDate.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}

const NoticeItem = ({
  title,
  content,
  createNoticeDate,
}: NoticeItemPropsType) => {
  const formattedDate = formatDate(createNoticeDate)
  return (
    <S.NoticeItemWrapper>
      <S.Top>
        <S.Title>[{title}]</S.Title>
        <S.Date>{formattedDate}</S.Date>
      </S.Top>
      <S.Content>{content}</S.Content>
    </S.NoticeItemWrapper>
  )
}

export default NoticeItem
