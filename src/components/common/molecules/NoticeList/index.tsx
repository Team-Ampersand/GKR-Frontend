import { useRecoilState, useRecoilValue } from 'recoil'
import * as S from './style'
import { roleType } from 'recoilAtoms'
import { NoticeListDummy } from 'asset/dummy/NoticeListdummy'
import { useState } from 'react'
import NoticeItem from 'components/common/atoms/NoticeItem'

const NoticeList = () => {
  const role = useRecoilValue(roleType)
  const [dummy, setDummy] = useState(NoticeListDummy.noticeList)

  return (
    <S.NoticeListWrapper>
      {dummy.map((i) => (
        <NoticeItem
          roleType={role}
          title={i.title}
          id={i.id}
          createNoticeDate={i.createNoticeDate}
          key={i.id}
        />
      ))}
    </S.NoticeListWrapper>
  )
}

export default NoticeList
