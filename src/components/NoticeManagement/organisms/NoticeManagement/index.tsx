import TopBox from 'components/common/molecules/TopBox'
import * as S from './style'
import ChoiceBox from 'components/common/molecules/ChoiceBox'
import { useState, useEffect } from 'react'
import NoticeManagementList from 'components/NoticeManagement/molecules/NoticeManagementList'
import AddNotice from 'components/NoticeManagement/molecules/AddNotice'
import { NoticeController } from 'utils/libs/requestUrls'
import { getData } from 'utils/apis/data'
import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'
import { noticeEditModal } from 'recoilAtoms'
import EditNotice from 'components/NoticeManagement/molecules/EditNotice'

export default function NoticeMangement() {
  const [pageState, setPageState] = useState('공지 목록')
  const editModalstate = useRecoilValue(noticeEditModal)
  const url = NoticeController.getNotice()
  const { data, refetch } = useQuery(
    ['noticeList', url],
    () => {
      return getData(url)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  useEffect(() => {
    refetch()
  }, [refetch, url])
  return (
    <S.NoticeManagementWrapper>
      <ChoiceBox
        data={['공지 목록', '공지사항 작성']}
        value={pageState}
        setValue={setPageState}
      />
      {pageState === '공지 목록' ? (
        <NoticeManagementList data={data?.data} />
      ) : (
        <AddNotice setPage={setPageState} />
      )}
      {editModalstate.state ? <EditNotice /> : null}
    </S.NoticeManagementWrapper>
  )
}
