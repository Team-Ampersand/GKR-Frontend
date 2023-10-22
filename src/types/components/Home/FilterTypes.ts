import { type } from "os"

export interface FilterButtonPropsType {
    modal: boolean
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