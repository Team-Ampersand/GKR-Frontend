import NoticeItem from 'components/common/atoms/NoticeItem'
import { useState } from 'react'
import * as S from './style'
import { NoticeListPropsType } from 'types/components/NoticeManagement/NoticManagementType'

const ListBox = ({ data }: NoticeListPropsType) => {
  return (
    <S.NoticeListWrapper>
      {data
        ? data.noticeList.map((i) => (
            <NoticeItem
              title={i.title}
              id={i.id}
              content={i.content}
              createNoticeDate={i.createNoticeDate}
              key={i.id}
            />
          ))
        : null}
    </S.NoticeListWrapper>
  )
}

export default ListBox
