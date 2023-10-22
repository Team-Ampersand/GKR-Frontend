import { FilterButtonPropsType } from "types/components/Home/FilterTypes"
import * as S from "./style"
import * as I from "asset/svg"

export default function FilterButton({ modal, setModal }: FilterButtonPropsType) {
    const onClick = () => {
        setModal(modal ? false : true)
    }
    console.log(modal)
    return (
        <S.FilterButtonWrapper onClick={onClick} >
            <I.Filter />
        </S.FilterButtonWrapper>
    )
}