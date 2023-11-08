export interface NoReturnData {
  applicationList: [
    {
      id: number
      name: string
      imageUrl: string
      description: string
      orderType: string
      userName: string
      email: string
      grade: number
      classNum: number
      stuNum: number
      reason: string
      rentalStartDate: Date
      rentalEndDate: Date
    },
  ]
}

export interface rentalData {
  applicationList: {
    id: string
    name: string
    imageUrl: string
    description: string
    orderType: string // RENTAL, EXTENSION
    userName: string
    email: string
    grade: number
    classNum: number
    stuNum: number
    reason: string // 신청 사유
    rentalStartDate: Date
    rentalEndDate: Date
  }[]
}

export interface ChiceItemPropsType {
  name: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
}

export interface ChiceBoxPropsType {
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
  data: string[]
}

export interface RentalListPropsType {
  data: rentalData | NoReturnData
}
