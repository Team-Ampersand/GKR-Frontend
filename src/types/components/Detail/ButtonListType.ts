export interface ButtonListPropsType {
  equipmentStatus: 'NOT_RENT' | 'WAITING' | 'RENTING' | 'REPAIRING' | undefined
  role: 'admin' | 'member'
  id: string | string[]
  apid?: number
}
