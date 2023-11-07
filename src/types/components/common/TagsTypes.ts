export interface TagPropsType {
  data: {
    name: string
    value: string
    color?: string
  }
  role: 'admin' | 'member'
}
