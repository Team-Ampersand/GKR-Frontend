import { FilterItemPropsType } from 'types/components/Home/FilterTypes'
import * as S from './style'
import { useRecoilState } from 'recoil'
import { filterState, roleType } from 'recoilAtoms'
export default function FilterItem({ name, value, type }: FilterItemPropsType) {
  const [state, setState] = useRecoilState(filterState)
  const [role, setRole] = useRecoilState(roleType)
  const select = type
    ? state.equipmentType === value
    : state.equipmentStatus === value
  const onClick = () => {
    type
      ? setState({ ...state, equipmentType: value })
      : setState({ ...state, equipmentStatus: value })
  }
  return (
    <S.FilterItemWrapper onClick={onClick} value={select} role={role}>
      {name}
    </S.FilterItemWrapper>
  )
}
