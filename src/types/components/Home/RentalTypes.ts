export interface RentalItemPropsType {
  applicationId?: number
  id: number
  title: string
  imageUrl: string
  description: string
  equipmentStatus: string
  equipmentType: string
  role?: 'admin' | 'member'
}
