import * as S from './style'
import MGMTListItem from 'components/Request/atoms/RequestItem'
export default function RequestList() {
  return (
    <S.RequestListWrapper>
      <MGMTListItem
        thumbnail="s"
        title="Raspberry pie"
        tag="RENTAL"
        tagVisible={true}
        student="손정민"
        period="2023.05.26 ~ 2023.06.26"
        id={1}
      />
      <MGMTListItem
        thumbnail="s"
        title="Raspberry pie"
        tag="RETURN"
        tagVisible={true}
        student="손정민"
        period="2023.05.26 ~ 2023.06.26"
        id={2}
      />
      <MGMTListItem
        thumbnail="s"
        title="Raspberry pie"
        tag="EXTENSION"
        tagVisible={true}
        student="손정민"
        period="2023.05.26 ~ 2023.06.26"
        id={2}
      />
    </S.RequestListWrapper>
  )
}
