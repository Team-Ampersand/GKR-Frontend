import { NoticeManagementItemPropsType } from 'types/components/NoticeManagement/NoticManagementType'
import * as S from './style'
import * as I from 'asset/svg'
import Link from 'next/link'
import { useMutation } from 'react-query'
import { NoticeController } from 'utils/libs/requestUrls'
import { deleteData } from 'utils/apis/data'
import { toast } from 'react-toastify'
export default function NoticeManagementItem({
  id,
  title,
  content,
  imageUrl,
  createNoticeDate,
}: NoticeManagementItemPropsType) {
  const date = createNoticeDate.split('T')[0].replace(/-/g, '.')
  const url = NoticeController.deleteNotice(id)
  const { data, mutate } = useMutation(
    ['notice', url],
    () => {
      return deleteData(url)
    },
    {
      onSuccess: () => {
        toast.success('삭제되었습니다')
      },
    },
  )

  const deleteNotice = () => {
    mutate()
  }

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
        <S.ButtonWrapper onClick={deleteNotice}>
          <I.Delete strok="#000000" width="24px" height="24px" />
        </S.ButtonWrapper>
      </S.ButtonListWrapper>
    </S.ViolationItemWrapper>
  )
}
