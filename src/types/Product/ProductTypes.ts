export interface ChoiceItemProps {
  name: string
}

export interface ListItemProps {
  name: string
  width?: string
}

export interface InputItemProps {
  title: string
  placeholder: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
