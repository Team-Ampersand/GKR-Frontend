export interface RequestDetailItemPropsType {
  title: string | undefined
  content: string | undefined
}

export interface RequestButtonList {
  id: number | undefined
  orderType: 'RENTAL' | 'RETURN' | 'EXTENSION' | undefined
}
