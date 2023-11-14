export interface ButtonListPropsType {
  equipmentStatus: 'NOT_RENT' | 'WAITING' | 'RENTING' | 'REPAIRING' | undefined
  renter: boolean
  role: 'admin' | 'member'
  id: string | string[]
}
