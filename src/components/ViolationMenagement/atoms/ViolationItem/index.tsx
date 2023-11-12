import * as I from 'asset/svg'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { ViolationItemPropsType } from 'types/components/ViolationManagement/ViolationType'
import { patchData } from 'utils/apis/data'
import { ViolationController } from 'utils/libs/requestUrls'
import toastOption from 'utils/libs/toastOption'
import * as S from './style'
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear().toString().slice(2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}
export default function ViolationItem({
  userName,
  violationReason,
  violationStartDate,
  violationEndDate,
}: ViolationItemPropsType) {
  const formattedStartDate = formatDate(violationStartDate)
  const formattedEndDate = formatDate(violationEndDate)
  const url = ViolationController.violation()
  const { mutate } = useMutation(
    ['violation', url],
    () => {
      return patchData(url, { email: 's22066@gsm.hs.kr' })
    },
    {
      onSuccess: () => {
        toast.success('제재 취소되었습니다.', toastOption)
        window.location.reload()
      },
      onError: () => {
        toast.error('제재 취소에 실패하였습니다.', toastOption)
      },
    },
  )
  const deleteViolation = () => {
    mutate()
  }
  return (
    <S.ViolationItemWrapper>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>[제재사항]</S.Title>
          <S.Username>{userName}</S.Username>
          <S.Date>{formattedStartDate + '~' + formattedEndDate}</S.Date>
        </S.TitleWrapper>
        <S.Content>{violationReason}</S.Content>
      </S.ContentWrapper>
      <S.MinusButtonWrapper onClick={deleteViolation}>
        <I.Minus />
        제재취소
      </S.MinusButtonWrapper>
    </S.ViolationItemWrapper>
  )
}
