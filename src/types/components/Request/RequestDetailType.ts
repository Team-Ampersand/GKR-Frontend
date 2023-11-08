export interface RequestDetailItemPropsType {
  title: string
  content: string
}

export interface RequestButtonList {
  id: number
  orderType: 'RENTAL' | 'RETURN' | 'EXTENSION'
}
