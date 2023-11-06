import MGMTListItem from "components/common/atoms/MGMTListItem"
import * as S from "./style"

export default function Request() {
    return (
        <S.RequestWrapper>
            <MGMTListItem
                thumbnail="s"
                title="Raspberry pie"
                tag="대여중"
                tagVisible={true}
                student="손정민"
                period="2023.05.26 ~ 2023.06.26"
            />
        </S.RequestWrapper>
    )
}
