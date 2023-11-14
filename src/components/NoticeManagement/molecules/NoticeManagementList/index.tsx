import NoticeManagementItem from 'components/NoticeManagement/atoms/NoticeManagementItem'
import * as S from './style'
import { NoticeListPropsType } from 'types/components/NoticeManagement/NoticManagementType'

export default function NoticeManagementList({ data }: NoticeListPropsType) {
  return (
    <S.NoticeListWrapper>
      {data?.noticeList.map((i) => (
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
