export interface RentalItemPropsType {
  id: number
  title: string
  imageUrl: string
  description: string
  equipmentStatus: string
  equipmentType: string
  role?: 'admin' | 'member'
}
