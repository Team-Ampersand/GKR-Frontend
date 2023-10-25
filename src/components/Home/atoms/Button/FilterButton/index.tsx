import { ModalPropsType } from 'types/components/Home/FilterTypes'
import * as S from './style'
import * as I from 'asset/svg'

export default function FilterButton({ setModal }: ModalPropsType) {
  const onClick = () => {
    setModal((prev) => !prev)
  }
  return (
    <S.FilterButtonWrapper onClick={onClick}>
      <I.Filter />
    </S.FilterButtonWrapper>
  )
}
