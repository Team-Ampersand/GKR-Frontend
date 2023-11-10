import NoticeManagementItem from 'components/NoticeManagement/atoms/NoticeManagementItem'
import * as S from './style'
import { NoticeListDummy } from 'asset/dummy/NoticeListdummy'
export default function NoticeManagementList() {
  return (
    <S.NoticeListWrapper>
      {NoticeListDummy.noticeList.map((i) => (
        <NoticeManagementItem
          key={i.id}
          id={i.id}
          title={i.title}
          content={i.content}
          imageUrl={i.imageUrl}
          createNoticeDate={i.createNoticeDate}
        />
      ))}
    </S.NoticeListWrapper>
  )
}
