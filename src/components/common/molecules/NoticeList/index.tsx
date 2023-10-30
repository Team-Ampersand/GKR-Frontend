import { NoticeListDummy } from 'asset/dummy/NoticeListdummy'
import NoticeItem from 'components/common/atoms/NoticeItem'
import { useState } from 'react'
import * as S from './style'

const NoticeList = () => {
  const [dummy, setDummy] = useState(NoticeListDummy.noticeList)

  return (
    <S.NoticeListWrapper>
      {dummy.map((i) => (
        <NoticeItem
          title={i.title}
          id={i.id}
          content={i.content}
          createNoticeDate={i.createNoticeDate}
          key={i.id}
        />
      ))}
    </S.NoticeListWrapper>
  )
}

export default NoticeList
