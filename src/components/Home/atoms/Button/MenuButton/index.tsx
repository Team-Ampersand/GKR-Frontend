import getRole from 'utils/getRole'
import { Layer } from './style'

interface Props {
  text: string
  selected?: boolean
  onClick: () => void
}

const MenuButton = ({ text, selected = false, onClick }: Props) => {
  const role = getRole()
  return (
    <Layer role={role} selected={selected} onClick={onClick}>
      {text}
    </Layer>
  )
}

export default MenuButton
