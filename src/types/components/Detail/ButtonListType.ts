export interface ButtonListPropsType {
  equipmentStatus: 'NOT_RENT' | 'WAITING' | 'RENTING' | 'REPAIRING'
  renter: boolean
  role: 'admin' | 'member'
}
