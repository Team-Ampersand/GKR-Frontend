import TopBox from 'components/common/molecules/TopBox'
import * as S from './style'
import ChoiceBox from 'components/common/molecules/ChoiceBox'
import { useState } from 'react'
import NoticeManagementList from 'components/NoticeManagement/molecules/NoticeManagementList'
import AddNotice from 'components/NoticeManagement/molecules/AddNotice'
export default function NoticeMangement() {
  const [pageState, setPageState] = useState('공지 목록')
  return (
    <S.NoticeManagementWrapper>
      <ChoiceBox
        data={['공지 목록', '공지사항 작성']}
        value={pageState}
        setValue={setPageState}
      />
      {pageState === '공지 목록' ? <NoticeManagementList /> : <AddNotice />}
    </S.NoticeManagementWrapper>
  )
}
