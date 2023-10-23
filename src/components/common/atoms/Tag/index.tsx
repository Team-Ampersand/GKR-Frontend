import { TagPropsType } from "types/components/common/TagsTypes"
import * as S from "./style"

export default function Tag({ data, role }: TagPropsType) {
    return (
        <S.tagWrapper BackgroundColor={data.color ? data.color : (role === "admin" ? "#865DFF" : "#FFA559")} >
            {data.name}
        </S.tagWrapper>
    )
}