export interface RequestDetailItemPropsType {
  title: string | undefined
  content: string | undefined
}

export interface RequestButtonList {
  id: string | undefined
  orderType: 'RENTAL' | 'RETURN' | 'EXTENSION' | undefined
}
