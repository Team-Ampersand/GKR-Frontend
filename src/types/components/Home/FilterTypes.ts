export interface ModalPropsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FilterList {
  name: string
  value: string
}

export interface FilterItemPropsType {
  name: string
  value: string
  type: boolean
}
