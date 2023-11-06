import { MGMTListItemPropsType } from "types/components/common/MGMTListType"
import * as S from "./style"

export default function MGMTListItem({ thumbnail, title, tag, student, period, tagVisible }: MGMTListItemPropsType) {

    return (
        <S.ListItemWrapper>
            <S.TitleWrapper>
                <S.thumbnailWrapper>
                    <img src={thumbnail} />
                </S.thumbnailWrapper>
                <S.Title>{title}</S.Title>
                <S.tag>{tag}</S.tag>
            </S.TitleWrapper>
            <S.informationWrapper>
                <S.studentWrapper>{student}</S.studentWrapper>
                <S.periodWrapper>{period}</S.periodWrapper>
            </S.informationWrapper>
        </S.ListItemWrapper>
    )
}
