export interface NoReturnData {
  applicationList: {
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
    rentalStartDate: string
    rentalEndDate: string
    equipmentId: string
  }[]
}

export interface rentalData {
  applicationList: {
    id: number
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
    rentalStartDate: string
    rentalEndDate: string
    equipmentId: string
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
  periodColor?: string
  equipmentId?: string
}

export interface RentalItemPropsType {
  thumbnail: string
  title: string
  tag: string
  student: string
  rentalStartDate: string
  rentalEndDate: string
  tagVisible: boolean
  id: string
  periodColor?: string
  orderType?: string
  equipmentId?: string
}
