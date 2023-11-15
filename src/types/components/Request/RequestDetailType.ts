export interface RequestDetailItemPropsType {
  title: string | undefined
  content: string | undefined
}

export interface RequestButtonList {
  id: number
  orderType: 'RENTAL' | 'RETURN' | 'EXTENSION'
}
