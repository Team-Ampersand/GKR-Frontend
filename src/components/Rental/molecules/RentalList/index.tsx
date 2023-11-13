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
          tag={'RENTING'}
          title={i.name}
          rentalStartDate={i.rentalStartDate}
          rentalEndDate={i.rentalEndDate}
          id={i.id}
          student={i.userName}
          tagVisible={true}
          periodColor={periodColor}
        />
      ))}
    </S.RentalListWrapper>
  )
}
