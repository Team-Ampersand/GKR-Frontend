import { NoticeManagementItemPropsType } from 'types/components/NoticeManagement/NoticManagementType'
import * as S from './style'
import * as I from 'asset/svg'
import Link from 'next/link'
export default function NoticeManagementItem({
  id,
  title,
  content,
  imageUrl,
  createNoticeDate,
}: NoticeManagementItemPropsType) {
  const date = createNoticeDate.split('T')[0].replace(/-/g, '.')
  return (
    <S.ViolationItemWrapper>
      <Link href={`/notice/${id}`}>
        <S.ContentWrapper>
          <S.TitleWrapper>
            <S.Title>
              [<S.TitleContent>{title}</S.TitleContent>]
            </S.Title>
            <S.Date>{date}</S.Date>
          </S.TitleWrapper>
          <S.Content>{content}</S.Content>
        </S.ContentWrapper>
      </Link>
      <S.ButtonListWrapper>
        <S.ButtonWrapper onClick={() => {}}>
          <I.Edit_Outline stroke="#000000" width="24px" height="24px" />
        </S.ButtonWrapper>
        <S.ButtonWrapper onClick={() => {}}>
          <I.Delete strok="#000000" width="24px" height="24px" />
        </S.ButtonWrapper>
      </S.ButtonListWrapper>
    </S.ViolationItemWrapper>
  )
}
