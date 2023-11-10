import { RentalListPropsType } from 'types/components/Rental/RentalType'
import * as S from './style'
import RentalItem from 'components/Rental/atoms/RentalItem'

export default function RentalList({ data, periodColor }: RentalListPropsType) {
  return (
    <S.RentalListWrapper>
      {data.applicationList.map((i) => (
        <RentalItem
          key={i.id}
          thumbnail={i.imageUrl}
          tag={i.orderType}
          title={i.name}
          period={'2'}
          id={i.id}
          student={i.userName}
          tagVisible={true}
          periodColor={periodColor}
        />
      ))}
    </S.RentalListWrapper>
  )
}