export interface equipmentpageProps {
  id: number
  name: String
  imageUrl: String
  description: String
  equipmentStatus: String
  equipmentType: String
}

export interface equipmentListType {
  equipmentList: equipmentpageProps[]
}
