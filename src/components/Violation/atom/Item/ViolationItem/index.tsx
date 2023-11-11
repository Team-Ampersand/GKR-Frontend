import * as S from './style'

interface ViolationItemProps {
  violationReason: 'OVERDUE' | 'DAMAGE' | 'ETC' | string
  violationStartDate: string
  violationEndDate: string
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear().toString().slice(2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}

const ViolationItem = ({
  violationReason,
  violationStartDate,
  violationEndDate,
}: ViolationItemProps) => {
  const formattedStartDate = formatDate(violationStartDate)
  const formattedEndDate = formatDate(violationEndDate)
  return (
    <S.ViolationItemWrapper>
      <S.Top>
        <S.Title>[제재사항]</S.Title>
        <S.Date>
          {formattedStartDate}~{formattedEndDate}
        </S.Date>
      </S.Top>
      <S.Content>{violationReason}</S.Content>
    </S.ViolationItemWrapper>
  )
}

export default ViolationItem
