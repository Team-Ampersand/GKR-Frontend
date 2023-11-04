export interface ButtonListPropsType {
  equipmentStatus: 'NOT_RENT' | 'WAITING' | 'RENTING' | 'REPAIRING'
  role: 'admin' | 'member'
  renter: string
}
