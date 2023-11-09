import RequestList from 'components/Request/molecules/RequestList'
import * as S from './style'
import TopBox from 'components/common/molecules/TopBox'

export default function Request() {
  return (
    <S.RequestWrapper>
      <TopBox text="요청목록" />
      <RequestList />
    </S.RequestWrapper>
  )
}
