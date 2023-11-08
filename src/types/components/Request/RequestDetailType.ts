export interface RequestDetailItemPropsType {
  title: string
  content: string
}

export interface RequestButtonList {
  id: number
  equipmentStatus: 'RENTAL' | 'RETURN' | 'EXTENSION'
}
